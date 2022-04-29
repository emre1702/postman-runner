const cliParser = require('./cli-parser.js');

describe('cli-parser', () => {
  it('should return valid runner args', () => {
    process.argv = ['path', '--collection=bar', '--runCount=20', '--foo=bar', '--insecure'];
    const args = cliParser.getCliArguments();
    expect(args).toStrictEqual({ collection: 'bar', runCount: 20, insecure: true });
  });
});
