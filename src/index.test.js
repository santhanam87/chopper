import testMethod from '.';

describe('Testing jest integration', () => {
    it('should return test method', () => {
        expect(testMethod()).toBe('Test Result udpated');
    });
});
