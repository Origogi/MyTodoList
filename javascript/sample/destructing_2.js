const landScape = {
    photographer : 'Nathan',
    equipment : 'Canon',
    format :' digital'
};

const {
    photographer,
    ...additional
} = landScape;

console.log(photographer);
console.log(additional);

