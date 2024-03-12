<?php
date_default_timezone_set('Europe/London');
class db extends mysqli
{
    protected static $instance;
    const host = 'localhost';
    const user = 'pe22015602';
    const pass = 'vladyslavsopun';
    const schema = 'pe22015602';
    const port = 3306;
    const sock = false;
    private function __construct()
    {
        // turn off error reporting
        mysqli_report(MYSQLI_REPORT_OFF);
        // connect to database
        @parent::__construct(
            self::host,
            self::user,
            self::pass,
            self::schema,
            self::port,
            self::sock
        );
        // check if a connection established
        if (mysqli_connect_errno()) {
            throw new exception(
                mysqli_connect_error(),
                mysqli_connect_errno()
            );
        }
    }
    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
}
