const axios = require('axios');
const userFixture = require('../Fixtures/user.fixture.js');

async function Token_Refresh(page, url = 'https://black-sky-04fb36810.4.azurestaticapps.net/dashboard') {
  try {
    const response = await axios.post('https://stac-api-dev.azurewebsites.net/api/student/login', {
      document: userFixture.validUser.cpf,
      password: userFixture.validUser.password
    });

    const { token, refreshToken } = response.data.detail.credentials;

    await page.goto('https://black-sky-04fb36810.4.azurestaticapps.net/');

    await page.evaluate(({ token, refreshToken }) => {
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('token', token);
    }, { token, refreshToken });

    await page.goto(url);
  } catch (error) {
    console.error('Erro ao fazer login ou armazenar tokens:', error.message);
  }
}

module.exports = { Token_Refresh };
