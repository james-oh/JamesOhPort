<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'headlessblog');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'L7=V9*zy]e~:g^rGwB= B7${(`)(-{uwF1Ui9MSLD&G4! ^$Ah-JE>X!tCp<f}PO');
define('SECURE_AUTH_KEY',  'J2^yBQ6y4XDVVsEeO!T[%|9<)=;G??jOpa7;s>0b=iv`wG.:|@n/CMhl^YUV`7y^');
define('LOGGED_IN_KEY',    'uZ88Oy%_)@<d%.dA94,}$<heudUsb6p=(&(Q<i;eaI-X{AYDBW(i]p5.NOeLwxT5');
define('NONCE_KEY',        'XY-ze%Ua$^&HI|pqFzwnM0/lgI5;&e93>Me5K6qH|.T^`r{fK4d.8X QmdAVrS29');
define('AUTH_SALT',        'j!k? V&h)=wn0bR/7s(3{Ldu.UQf3+j+5yK:PEUlZYLv>;>tqnD}!hK^R^:os(B2');
define('SECURE_AUTH_SALT', '_|b0gS)Ht$^r]mnKs-#n82+4{=m{hrfVy!;<psfi1d_|/HT8;}e<Jm>k9x%xBQqi');
define('LOGGED_IN_SALT',   '}fY?K_9 /0cseJff:#5|cWQsR7|!.[Gp=s_hTWA0ehIt[7@#h+6lkqH]U}.7#gk<');
define('NONCE_SALT',       '5k2eukOWF*sb#,n]|Km$iaWqcwH-N&i?og1|a74o/g-SP~V}x~56gg_>aPaCo&=w');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
