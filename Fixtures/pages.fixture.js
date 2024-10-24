// xpath das paginas

module.exports = {
    home: {
        confirmationText: '//span[contains(text(), "sua jornada está aqui")]'
    },
    login: {
      alreadyRegisteredButton: '//button[div[text()="Já tenho cadastro"]]',
      cpfField: '//input[@name="document"]',
      passwordField: '//input[@name="password"]',
      loginButton: '//button[div[text()="Acessar"]]',
      confirmationTextValidUser: '//span[text()="Teste, sua jornada está aqui"]',
      confirmationTextInvalidUser: '//div[text()="CPF ou senha inválidos"]'
    },
    myjourney: {
      journeyButton: '//a[@href="/my-journey" and .//span[text()="Minha jornada"]]',
      confirmationText: '//h1[text()="Minha Jornada"]'
    }
};