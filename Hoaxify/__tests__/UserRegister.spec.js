const request = require('supertest');
const app = require('../app')

it('returns 200 OK when singup request is valid', () => {
    request(app).post('/api/1.0/users')A
        .send({
            username: 'user1',
            email: 'user1@mail'
        })
})
