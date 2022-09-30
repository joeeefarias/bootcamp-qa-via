/// <reference types="cypress" />
import auth from '../../fixtures/auth.json'
import bandeira from '../../fixtures/bandeira.json'
import header from '../../fixtures/header.json'
import pwd from '../../fixtures/pwd.json'

describe('Testes de alteração de senha Casas Bahia', () => {
   let token
    beforeEach(() => {
        cy.loginBff(bandeira.cb.email, header.cb, auth.cb.email.ok).then((response) => {
            token = response.body.accessToken
        })
    })

    it('[PUT] Deve Alterar senha com sucesso',  {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.request({
            method: 'PUT',
            url: bandeira.cb.pwdChange,
            body:pwd.cb.ok,
            headers: {
                'authorization': 'Bearer '+token,
                'content-type': 'application/json',
                'User-Agent': 'ViaVarejo iOSApp',
                'Referer': 'https://ios.com.br',
                'X-Device': 'ios',
                'X-Token' : 'exp=1703181957~acl=/*~hmac=276f68b4330cd54d9f7cc3c118b5b8c61c38a177ca49b807a6f758efa866097e'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

   it('[PUT] Deve retornar erro ao altera senha com confirmação divergente', {
        env: {
            API_MESSAGES: false
        }
    }, () => {
        cy.api({
            method: 'PUT',
            url: bandeira.cb.pwdChange,
            body: pwd.cb.nok,
            failOnStatusCode: false,
            headers: {
                'authorization': "Bearer "+token,
                'content-type': 'application/json',
                'User-Agent': 'ViaVarejo iOSApp',
                'Referer': 'https://ios.com.br',
                'X-Device': 'ios',
                'X-Token' : 'exp=1703181957~acl=/*~hmac=276f68b4330cd54d9f7cc3c118b5b8c61c38a177ca49b807a6f758efa866097e'
            }
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.mensagemLog[0]).to.eq("O campo ConfirmacaoNovaSenha, teve a violação de contrato: NovaSenha e ConfirmacaoNovaSenha devem ter o mesmo valor")
        })
    })
})

describe('Testes de alteração de senha Extra', () => {
    let token
     beforeEach(() => {
         cy.loginBff(bandeira.ex.email, header.ex, auth.ex.email.ok).then((response) => {
             token = response.body.accessToken
         })
     })
 
     it('[PUT] Deve Alterar senha com sucesso',  {
         env: {
             API_MESSAGES: false
         }
     }, () => {
         cy.request({
             method: 'PUT',
             url: bandeira.ex.pwdChange,
             body:pwd.ex.ok,
             headers: {
                 'authorization': 'Bearer '+token,
                 'content-type': 'application/json',
                 'User-Agent': 'ViaVarejo iOSApp',
                 'Referer': 'https://ios.com.br',
                 'X-Device': 'ios',
                 'X-Token' : 'exp=1703182532~acl=/*~hmac=82ecaf9dbc95dc10f29103fb73f80e26f92ed15b44e4ee7c158cf25dd321302a'
             }
         }).then((response) => {
             expect(response.status).to.eq(200)
         })
     })
 
    it('[PUT] Deve retornar erro ao altera senha com confirmação divergente', {
         env: {
             API_MESSAGES: false
         }
     }, () => {
         cy.api({
             method: 'PUT',
             url: bandeira.ex.pwdChange,
             body: pwd.ex.nok,
             failOnStatusCode: false,
             headers: {
                 'authorization': "Bearer "+token,
                 'content-type': 'application/json',
                 'User-Agent': 'ViaVarejo iOSApp',
                 'Referer': 'https://ios.com.br',
                 'X-Device': 'ios',
                 'X-Token' : 'exp=1703182532~acl=/*~hmac=82ecaf9dbc95dc10f29103fb73f80e26f92ed15b44e4ee7c158cf25dd321302a'
             }
         }).then((response) => {
             expect(response.status).to.eq(400)
             expect(response.body.mensagemLog[0]).to.eq("O campo ConfirmacaoNovaSenha, teve a violação de contrato: NovaSenha e ConfirmacaoNovaSenha devem ter o mesmo valor")
         })
     })
 })

 describe('Testes de alteração de senha Ponto', () => {
    let token
     beforeEach(() => {
         cy.loginBff(bandeira.pf.email, header.pf, auth.pf.email.ok).then((response) => {
             token = response.body.accessToken
         })
     })
 
     it('[PUT] Deve Alterar senha com sucesso',  {
         env: {
             API_MESSAGES: false
         }
     }, () => {
         cy.request({
             method: 'PUT',
             url: bandeira.pf.pwdChange,
             body:pwd.pf.ok,
             headers: {
                 'authorization': 'Bearer '+token,
                 'content-type': 'application/json',
                 'User-Agent': 'ViaVarejo iOSApp',
                 'Referer': 'https://ios.com.br',
                 'X-Device': 'ios',
                 'X-Token' : 'exp=1703182261~acl=/*~hmac=7f64d8eb3b3b1da667ecfea2732d25c36d1038d4a5de523f6d8a3a64c011f16d'
             }
         }).then((response) => {
             expect(response.status).to.eq(200)
         })
     })
 
    it('[PUT] Deve retornar erro ao altera senha com confirmação divergente', {
         env: {
             API_MESSAGES: false
         }
     }, () => {
         cy.api({
             method: 'PUT',
             url: bandeira.pf.pwdChange,
             body: pwd.pf.nok,
             failOnStatusCode: false,
             headers: {
                 'authorization': "Bearer "+token,
                 'content-type': 'application/json',
                 'User-Agent': 'ViaVarejo iOSApp',
                 'Referer': 'https://ios.com.br',
                 'X-Device': 'ios',
                 'X-Token' : 'exp=1703182261~acl=/*~hmac=7f64d8eb3b3b1da667ecfea2732d25c36d1038d4a5de523f6d8a3a64c011f16d'
             }
         }).then((response) => {
             expect(response.status).to.eq(400)
             expect(response.body.mensagemLog[0]).to.eq("O campo ConfirmacaoNovaSenha, teve a violação de contrato: NovaSenha e ConfirmacaoNovaSenha devem ter o mesmo valor")
         })
     })
 })