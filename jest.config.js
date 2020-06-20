module.exports = {
    preset: '@vue/cli-plugin-unit-jest',

    moduleNameMapper: {
        '\\.(svg|png)$': '<rootDir>/tests/unit/mock.js',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~/(.*)$': '<rootDir>/$1',
    },
};
