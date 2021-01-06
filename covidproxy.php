<?php
$key = $_GET['key'];
$url = "https://api.corona-19.kr/korea/country/new/?serviceKey=" + $key;
$ch = curl_init(); //curl 로딩
curl_setopt($ch, CURLOPT_URL,$url); //curl에 url 셋팅
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // 이 셋팅은 1로 고정하는 것이 정신건강에 좋음

$result = curl_exec ($ch); // curl 실행 및 결과값 저장
echo($result); //출력
curl_close ($ch); // curl 종료
?>