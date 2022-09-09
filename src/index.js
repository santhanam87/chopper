const asyncMethod = () => {
    const testPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('return value');
        });
    });
    return testPromise;
};
const testMethod = async () => {
    const responseValue = await asyncMethod();
    return responseValue;
};

export default testMethod;
