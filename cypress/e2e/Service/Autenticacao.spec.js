/// <reference types="cypress" />
import auth from '../../fixtures/auth.json'
import bandeira from '../../fixtures/bandeira.json'
import header from '../../fixtures/header.json'

describe('Testes de login Casas Bahia', () => {
    it('[POST] Deve fazer login com sucesso utilizando e-mail', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.cb.email, header.cb, auth.cb.email.ok)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.empty
                expect(response.body.idClienteBandeira).to.eq("46197693")
            })
    })

    it('[POST] Deve fazer login com sucesso utilizando CPF/CNPF', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.cb.cpfCnpj, header.cb, auth.cb.cpfCnpj.cpf.ok)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.empty
                expect(response.body.idClienteBandeira).to.eq("10228604")
            })
    })

    it('[POST] Deve retornar erro ao fazer login utilizando e-mail com dados inválidos', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.cb.email, header.cb, auth.cb.email.nok)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.not.empty
                expect(response.body.mensagem).to.eq("E-mail ou senha incorretos.")
            })
    })

    it('[POST] Deve retornar erro ao fazer login utilizando CPF/CNPJ  com dados inválidos', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.cb.cpfCnpj, header.cb, auth.cb.cpfCnpj.cpf.nok)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.not.empty
                expect(response.body.mensagem).to.eq("O usuário ou a senha digitada está incorreta. Por favor, tente novamente.")
            })
    })
});

describe('Testes de login Extra', () => {
    it('[POST] Deve fazer login com sucesso utilizando e-mail', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.ex.email, header.ex, auth.ex.email.ok)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.empty
                expect(response.body.idClienteBandeira).to.eq("26804916")
            })
    })

    it('[POST] Deve fazer login com sucesso utilizando CPF/CNPF', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.ex.cpfCnpj, header.ex, auth.ex.cpfCnpj.cpf.ok)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.empty
                expect(response.body.idClienteBandeira).to.eq("11683445")
            })
    })

    it('[POST] Deve retornar erro ao fazer login utilizando e-mail com dados inválidos', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.ex.email, header.ex, auth.ex.email.nok)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.not.empty
                expect(response.body.mensagem).to.eq("E-mail ou senha incorretos.")
            })
    })

    it('[POST] Deve retornar erro ao fazer login utilizando CPF/CNPJ com dados inválidos', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.ex.cpfCnpj, header.ex, auth.ex.cpfCnpj.cpf.nok)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.not.empty
                expect(response.body.mensagem).to.eq("O usuário ou a senha digitada está incorreta. Por favor, tente novamente.")
            })
    })
});

describe('Testes de login Ponto', () => {
    it('[POST] Deve fazer login com sucesso utilizando e-mail', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.pf.email, header.pf, auth.pf.email.ok)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.empty
                expect(response.body.idClienteBandeira).to.eq("24266107")
            })
    })

    it('[POST] Deve fazer login com sucesso utilizando CPF/CNPF', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.pf.cpfCnpj, header.pf, auth.pf.cpfCnpj.cpf.ok)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.empty
                expect(response.body.idClienteBandeira).to.eq("11298984")
            })
    })

    it('[POST] Deve retornar erro ao fazer login utilizando e-mail com dados inválidos', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.pf.email, header.pf, auth.pf.email.nok)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.not.empty
                expect(response.body.mensagem).to.eq("E-mail ou senha incorretos.")
            })
    })

    it('[POST] Deve retornar erro ao fazer login utilizando CPF/CNPJ com dados inválidos', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.loginBff(bandeira.pf.cpfCnpj, header.pf, auth.pf.cpfCnpj.cpf.nok)
            .then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.not.empty
                expect(response.body.mensagem).to.eq("O usuário ou a senha digitada está incorreta. Por favor, tente novamente.")
            })
    })
});

