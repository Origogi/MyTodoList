const fs = require('fs');
const path = require('path');


const args = process.argv.slice(2); // 처음 두 개 요소(실행 파일 경로, 스크립트 파일 경로)를 제외한 나머지 인자들을 배열로 가져옵니다.
const target = args[0]; // 첫 번째 인자를 파라미터로 사용합니다.


run(`./${target}`);

function hasEditFile(files, file) {
    const fileName = file.split('.')[0];
    const fileId = fileName.split('_')[1];
    const editFile = `IMG_E${fileId}.jpg`;
    return files.includes(editFile);
}

async function run(folder) {
    const files = await readFromFolder(folder);

    for (const file of files) {
        const ext = file.split('.')[1];

        if (!ext) {
            continue;
        }

        switch (ext) {
            case 'mp4':
            case 'mov':
                await moveFile(folder, path.join(folder, 'video'), file);
                break;
            case 'png':
            case 'aae':
                await moveFile(folder, path.join(folder, 'captured'), file);
                break;
            case 'jpg':
                if (hasEditFile(files, file)) {
                    await moveFile(folder, path.join(folder, 'duplicated'), file);
                }
        }

    }
}

async function createFolder(folder) {
    if (fs.existsSync(folder)) {
        return;
    }
    // 폴더 생성
    fs.mkdirSync(folder);
}

async function moveFile(src, dest, file) {
    await createFolder(dest);
    console.log('move file : ', path.join(src,file), '=>', path.join(dest, file));

    await fs.promises.rename(path.join(src,file), path.join(dest, file));
}


function readFromFolder(folder) {
    return fs.promises.readdir(folder);
}
