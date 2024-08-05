// test/test.js
const { expect } = require('chai');
const fs = require('fs');
const path = require('path');

describe('HTML content', () => {
    it('should contain Hola Mundo', (done) => {
        const filePath = path.join(__dirname, '../index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return done(err);
            }
            expect(data).to.include('<h1>Hola Mundo</h1>');
            done();
        });
    });
});
