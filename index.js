const randomId = () => {
    const id = Math.floor( Math.random() * Date.now() );
    return id;
};

module.export.randomId = randomId;

