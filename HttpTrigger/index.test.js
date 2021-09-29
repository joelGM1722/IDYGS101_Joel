const httpFuntion= require('./index');
const context = require('../testing/Context');

test('Http trigger example' , async() =>{
    const request = {
        query: { name: 'schuc'}
    };

    await httpFuntion(context,request);
    expect(context.res.body).toContain('example');
    expect(context.res.body).toEqual('Welcome, schuc');
    expect(context.log.mock.calls.leght).toBe(1);
});