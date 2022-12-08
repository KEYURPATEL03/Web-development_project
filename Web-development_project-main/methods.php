<?php
class method extends mysqli{
    private $state_csv = false;
    public function __construct(){
            parent::__construct("127.0.0.1","root","","stoodle");
            if($this->connect_error){
                echo "fail to connect to database :".$this->connect_error;
            }
    }
    public function import($file)
        {
            $this->state_csv = false;
            $file = fopen($file,'r');
            while($row =fgetcsv($file))
            {
                $value = "'".implode("','",$row)."'";
                $q = "INSERT INTO student(studentID,studentName,groupNo) VALUES(".$value.")"; 
                if($this->query($q)){
                    $this->state_csv = true;
                }else{
                    $this->state_csv= false;
                    echo $this->error;
                }
            }
                    if ($this->state_csv){
                        echo "Successfully Imported ";
                    }else{
                        echo "Something went wrong  ";
                    }
        }
}
?>