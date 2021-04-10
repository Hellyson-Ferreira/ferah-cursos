import Head from 'next/head'
import React from 'react'
import SocialLoginButton from '../components/SocialLoginButton'
import styles from '../styles/pages/Login.module.css'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login page</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
        <div className={styles.loginContainer}>
          {/* <span>você não tem uma conta?<a href="#">Criar</a></span> */}
          <h1>Welcome to AOT </h1>
          <p>Blandit libero volutpat sed cras ornare arcu dui.<br />Accumsas in nisi scelerisque eu</p>

          <form action="">
            <div className={styles.inputGroup}>
              <input id="inputEmail" required type="text" />
              <label htmlFor="inputEmail">Email</label>
            </div>

            <div className={styles.inputGroup}>
              <input id="inputPassword" required type="password" />
              <label htmlFor="inputPassword">Senha</label>
            </div>


            <button type="submit">Entrar</button>
            <span><div></div>Ou entre com <div></div></span>
          </form>
          <div className={styles.buttonGroup}>
            <SocialLoginButton image="icons/github.svg" />
            <SocialLoginButton image="icons/google.svg" />
            <SocialLoginButton image="icons/twitter.svg" />
          </div>
        </div>
        </div>
      </main>


    </>
  )
}
