import React from 'react';
import * as io from 'react-icons/io';
import * as v from 'react-icons/vsc';
import { connect } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import LoadingButton from '../../Components/LoadingButton';
import { login, register } from '../actions';
import styles from './RegisterView.module.css';

const RegisterView = ({ user, register, login, error, loading }) => {
	const [username, setUsername] = React.useState('user');
	const [email, setEmail] = React.useState('user@email.com');
	const [password, setPassword] = React.useState('password');
	const [showPassword, setShowPassword] = React.useState(false);

	const history = useHistory();

	const handleRegister = async (e) => {
		e.preventDefault();
		await register({ username, email, password });
		await login({ username, password });
		history.go('/login');
	};

	if (user) return <Redirect to='/login' />;

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h1 className={styles.title}>Registrati</h1>
				</div>

				<form
					className={styles.form}
					onSubmit={handleRegister}
				>
					<div className={styles.formGroup}>
						<v.VscMail size='20px' />
						<input
							type='username'
							name='username'
							placeholder='Inserisci la tua nome di utente'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<v.VscMail size='20px' />
						<input
							type='email'
							name='email'
							placeholder='Inserisci la tua email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<v.VscLock size='20px' />
						<input
							type={showPassword ? 'text' : 'password'}
							name='password'
							placeholder='Scrivi la tua Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<v.VscEye
							size='20px'
							style={{ width: 40, cursor: 'pointer' }}
							onClick={() => setShowPassword((s) => !s)}
						/>
					</div>

					<span className='error-msg'>{error}</span>

					<button
						type='submit'
						className={styles.primaryBtn}
					>
						{loading && <LoadingButton />}
						{!loading && (
							<span>
								<v.VscCheck
									size='20px'
									style={{ width: 40 }}
								/>
								<span>Registrati</span>
							</span>
						)}
					</button>

					<div className={styles.seperator}>
						<span>OPPURE ACCEDI CON</span>
					</div>

					<div className={styles.flexbox}>
						<button type='button'>
							<io.IoLogoGoogle
								size='30px'
								style={{ width: 40 }}
							/>
						</button>
						<button type='button'>
							<io.IoLogoFacebook
								size='30px'
								style={{ width: 40 }}
							/>
						</button>
						<button type='button'>
							<io.IoLogoApple
								size='30px'
								style={{ width: 40 }}
							/>
						</button>
					</div>
				</form>

				<div className={styles.centered}>
					<Link to='/login'>Accedi</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.account.user,
	loading: state.account.userLoading,
	error: state.account.error,
});

export default connect(mapStateToProps, { register, login })(RegisterView);
