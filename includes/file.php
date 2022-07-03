<?php

echo 'Yes, wee got Post Parameter by ajax. Norka 1';

echo "<pre>";
print_r( $_POST );
echo "</pre>";

function getNumbersById( $text ) {
    echo 'Wee got this text from text_input: ' . $text;
};


if(isset($_POST['text_input']) && !empty($_POST['text_input'])) {
    getNumbersById( $_POST['text_input'] );
}


