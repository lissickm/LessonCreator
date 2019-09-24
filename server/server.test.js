let app = require('../server.js');
let testServer = require('supertest');

describe('Test the root path', () => {
    test('should respond 200 to /logout', async () => {
        // testServer(app).post('/api/user/logout').then(response => {
        //     expect(response.statusCode).toBe(200);
        // })

        let response = await testServer(app).post('/api/user/logout')
        expect(response.statusCode).toBe(200);
    })


    test('should respond 403 to not logged in request', (done) => {
        testServer(app).get('/api/user').then(response => {
            expect(response.statusCode).toBe(403);
            done();
        })
    })

    test('/user should return user info when authenticated', async () => {
        //login
        // agent remembers cookies
        let agent = testServer.agent(app);
        const response = await agent.post('/api/user/login')
            // send data
            // use a test username and password and database to not compromise the real database
            .send({ username: 'matt', password: '1234' })
        expect(response.statusCode).toBe(200);

        //get to /api/user
        const userResponse = await agent.get('/api/user');
        expect(userResponse.statusCode).toBe(200);

    })

})