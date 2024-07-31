<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'UOlwgCh97^B,C7bBUyw[m2%AYi[D=E^Yp90O8}*dJ0)NvaI!>D%BbAAfGILCx1cL' );
define( 'SECURE_AUTH_KEY',   'We#}<huW-4CGhEvJ2uy3wx_<n drU=x.yYk )^QgtDg+`$9*.Jx1$Oa_xqC^0wxA' );
define( 'LOGGED_IN_KEY',     ')ychz[bAPOKhPp(CwI)obWLt6!-Mk7<},qAi&Ao(>pBGE_c3A{mizLfM.;K82n6Y' );
define( 'NONCE_KEY',         '5=a|f=)jb]Ax!b*+HH ^`M)`^YFV{fS4|7wg1{RsgN0xBt/_c.cx0pstl[W($WCQ' );
define( 'AUTH_SALT',         '%iaCD8spaSU1T3IjCOEZCmq_ymF.5#Y1mL<h)EeEiNhur]l56}hC#!&Ildxdl^mV' );
define( 'SECURE_AUTH_SALT',  'RZaBY`e)NK%p&!IT!SJ1(uyN8Z1jpy%zubDQ!]j$Ztpu&xG?`C}5a%{$9MFMNbx9' );
define( 'LOGGED_IN_SALT',    '`eC[JSRom3RE*)RmZm*m=w+3yMubTkX:1xd{EghmGYgtI/09DE3ZC?V&SBKL2hN]' );
define( 'NONCE_SALT',        'cV5<[x@qUFcPy[`9mh>JT=vNx4|JH6^VwD5(}RxH*Jfd,HT^*:OrwNGzj(kshFLz' );
define( 'WP_CACHE_KEY_SALT', ']nvvz=xnu^WRkVY RCq8BWIWR3Kg4_79xo[+SJgr:U=x}&rF W1;M5r, xE_eLF_' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
