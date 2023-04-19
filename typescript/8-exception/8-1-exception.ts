// Java : Exception
// JavaScript : Error

function readFile(fileName: string): string {
  if (fileName === "not exist") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(file: string) {}

const fileName = "not exist";
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log("catch!");
} finally {
  closeFile(fileName);
}

closeFile(fileName);
