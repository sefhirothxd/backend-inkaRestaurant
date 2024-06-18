import pg from 'pg';

export const pool = new pg.Pool({
	port: 5432,
	host: 'localhost',
	user: 'alumno',
	password: '123456',
	database: 'inkaflavors',
});

pool.on('connect', () => {
	console.log('connected to the db');
});
