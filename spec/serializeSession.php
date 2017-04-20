<?php
session_start();
function debug_session($item) { 
  $_SESSION = $item;
  echo session_encode(), "\n";
}

debug_session(array('a_number' => 42, 'a_string' => "fourtytwo", 'user_data' => array('uid' => 666)));

