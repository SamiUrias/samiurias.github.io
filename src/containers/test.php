function excercise2(){
  for( $i; $i<=200; $i++){
    echo $i;
    if($i %3 == 0){
      echo 'Blue';
    } else if($i %5 == 0) {
      echo 'Red';
    } else if($i %3 == 0 and $i %5 ==0) {
      echo 'BlueRed';
    }

  // echo PHP_EOL;
}

excercise2();