import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingButton from '../../Components/LoadingButton';
import { login } from '../actions';
import styles from './LoginView.module.css';
import * as v from 'react-icons/vsc';
import * as io from 'react-icons/io';

const LoginView = ({ user, login, error, loading, isAuthenticated }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = e => {
    e.preventDefault();

    login({ username, password });
  }

  if (user) return <Redirect to='/' />

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Accedi</h1>
      </div>
      
      <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <v.VscMail size='20px' />
            <input
                type="username"
                name="username"
                placeholder="Inserisci la tua email di utente"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            </div>

          <div className={styles.formGroup}>
            <v.VscLock size='20px' />
            <input
                type="password"
                name="password"
                placeholder="Scrivi la tua Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <v.VscEye size='20px' style={{width:40}} />
          </div>
    


            <span className='error-msg'>{error}</span>

            <button className={styles.primaryBtn}>
              {loading && <LoadingButton />} 
              {!loading && (
                <span>
                  <v.VscCheck size='20px' style={{width:40}} />
                  <span>Accedi</span>
                </span> 
              )}
            </button>

            <div className={styles.seperator}><span>OPPURE ACCEDI CON</span></div>

            <div className={styles.flexbox}>
              <button type="button">
                <io.IoLogoGoogle size='30px' style={{width:40}} />
              </button>
              <button type="button">
                <io.IoLogoFacebook size='30px' style={{width:40}} />
              </button>
              <button type="button">
                <io.IoLogoApple size='30px' style={{width:40}} />
              </button>
            </div>

        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.account.user,
});

export default connect(
  mapStateToProps,
  { login }
)(LoginView);