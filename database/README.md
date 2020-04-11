# Database Files
This section contains the files necessary to create the database for the flasher app. Database creation must be followed in order or else your database will likely not work with the latest code.

## Assumptions
These files are created for a PostgreSQL installation. If you require a different version of SQL then please refer to the database design document in the wiki, or modify the files here in order to create your database. 

## Database Creation
Make sure you create a database with the command `CREATE DATABASE flasher`.

## File Run Order
Run the files in the following order from the `database_edit` directory:
* 1_Initial.pgsql
   * Initial MVP-ish creation of tables:
   * AudioClip
   * SourceType
   * Comment