import testMethod from '.';

describe('Testing jest integration', () => {
    it('should return test method', async () => {
        const returnValue = await testMethod();
        expect(returnValue).toBe('return value');
    });
});
