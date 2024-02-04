import React from 'react'
import { useEffect } from 'react'
import $ from "jquery"
export default function Footer() {

    useEffect(() => {
        $(".threept").on("click", fun1);

        function fun1() {
            var el1 = $(".div1");

            el1.slideToggle();
        }





        $("#one").on("click", fun2);

        function fun2() {
            var el2 = $("#one1");
            el2.slideToggle();
        }
        $("#two").on("click", fun3);

        function fun3() {
            var el3 = $("#two2");
            el3.slideToggle();
        }
        $("#three").on("click", fun4);

        function fun4() {
            var el4 = $("#three3");
            el4.slideToggle();
        }
        $("#four").on("click", fun5);

        function fun5() {
            var el5 = $("#four4");
            el5.slideToggle();
        }
        $("#five").on("click", fun6);

        function fun6() {
            var el6 = $("#five5");
            el6.slideToggle();
        }
        $("#six").on("click", fun7);

        function fun7() {
            var el7 = $("#six6");
            el7.slideToggle();
        }
        $("#seven").on("click", fun8);

        function fun8() {
            var el8 = $("#seven7");
            el8.slideToggle();
        }
        $("#eight").on("click", fun9);

        function fun9() {
            var el9 = $("#eight8");
            el9.slideToggle();
        }
        $("#nine").on("click", fun10);

        function fun10() {
            var el0 = $("#nine9");
            el0.slideToggle();
        }
    }, []);
    return ( <
        div >
        <
        footer className = "footer-wrapper" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "upper-text-container" >
        1. Trade In: Trade‑ in values vary.iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑ in of iPhone 8 Plus and iPhone X in good condition.Additional trade‑ in values require purchase of a new iPhone, subject to availability and limits.Must be at least 18. Apple or its trade - in partners reserve the right to refuse or limit any Trade In transaction
        for any reason.In‑ store trade‑ in requires presentation of a valid, government - issued photo ID(local law may require saving this information).Sales tax may be assessed on full value of new iPhone.Additional terms from Apple or Apple’ s trade - in partners may apply.Monthly pricing: Available to qualified customers and requires 0 % APR, 24‑ month installment loan with Citizens One, and iPhone activation with AT & T, Sprint, T‑ Mobile, or Verizon. < a href = "#" > Full terms apply < /a>. < /
        div > <
        /div> < 
        div className = "row footer-links-wrapper" >
        <
        div className = "desktop" >
        <
        div className = "col col-12 col-sm-6 col-m-4 col-lg-2 offset1 inline" >
        <
        h3 id = "one"
        className = "hedoch" > Shop and Learn < /h3> <
        ul id = "one1"
        className = "listoch" >
        <
        li > < a href = "#" > Mac < /a></li >
        <
        li > < a href = "#" > iPad < /a></li >
        <
        li > < a href = "#" > iPhone < /a></li >
        <
        li > < a href = "#" > Watch < /a></li >
        <
        li > < a href = "#" > TV < /a></li >
        <
        li > < a href = "#" > Music < /a></li >
        <
        li > < a href = "#" > AirPods < /a></li >
        <
        li > < a href = "#" > HomePod < /a></li >
        <
        li > < a href = "#" > iPod touch < /a></li >
        <
        li > < a href = "#" > Accessories < /a></li >
        <
        li > < a href = "#" > Gift Cards < /a></li >
        <
        /ul> < /
        div > <
        div className = "col col-12 col-sm-6 col-m-4 col-lg-2 inline" >
        <
        h3 id = "two"
        className = "hedoch" > Services < /h3> <
        ul id = "two2"
        className = "listoch" >
        <
        li > < a href = "#" > Apple Music < /a></li >
        <
        li > < a href = "#" > Apple News + < /a></li >
        <
        li > < a href = "#" > Apple TV + < /a></li >
        <
        li > < a href = "#" > Apple Arcade < /a></li >
        <
        li > < a href = "#" > Apple Card < /a></li >
        <
        li > < a href = "#" > iCloud < /a></li >
        <
        /ul> <
        h3 id = "three"
        className = "hedoch" > Account < /h3> <
        ul id = "three3"
        className = "listoch" >
        <
        li > < a href = "#" > Manage Your Apple ID < /a></li >
        <
        li > < a href = "#" > Apple Store Account < /a></li >
        <
        li > < a href = "#" > iCloud.com < /a></li >
        <
        /ul> < /
        div > <
        div className = "col col-12 col-sm-6 col-m-4 col-lg-2 inline" >
        <
        h3 id = "four"
        className = "hedoch" > Apple Store < /h3> <
        ul id = "four4"
        className = "listoch" >
        <
        li > < a href = "#" > Find a Store < /a></li >
        <
        li > < a href = "#" > Genius Bar < /a></li >
        <
        li > < a href = "#" > Today at Apple < /a></li >
        <
        li > < a href = "#" > Apple Camp < /a></li >
        <
        li > < a href = "#" > Field Trip < /a></li >
        <
        li > < a href = "#" > Apple Store App < /a></li >
        <
        li > < a href = "#" > Refurbished and Clearance < /a></li >
        <
        li > < a href = "#" > Financing < /a></li >
        <
        li > < a href = "#" > Apple Trade In < /a></li >
        <
        li > < a href = "#" > Order Status < /a></li >
        <
        li > < a href = "#" > Shopping Help < /a></li >
        <
        /ul> </
        div > <
        div className = "col col-12 col-sm-6 col-m-4 col-lg-2 inline" >
        <
        h3 id = "five"
        className = "hedoch" > For Business < /h3> <
        ul id = "five5"
        className = "listoch" >
        <
        li > < a href = "#" > Apple and Business < /a></li >
        <
        li > < a href = "#" > Shop
        for Business < /a></li >
        <
        /ul> <
        h3 id = "six"
        className = "hedoch" > For Education < /h3> <
        ul id = "six6"
        className = "listoch" >
        <
        li > < a href = "#" > Apple and Education < /a></li >
        <
        li > < a href = "#" > Shop
        for College < /a></li >
        <
        /ul> <
        h3 id = "seven"
        className = "hedoch" > For Healwwwthcare < /h3> <
        ul id = "seven7"
        className = "listoch" >
        <
        li > < a href = "#" > Manage Your Apple ID < /a></li >
        <
        li > < a href = "#" > Apple Store Account < /a></li >
        <
        li > < a href = "#" > iCloud.com < /a></li >
        <
        /ul> < /
        div >
        <
        div className = "col col-12 col-sm-6 col-m-4 col-lg-2 inline" >
        <
        h3 id = "eight"
        className = "hedoch" > Apple Values < /h3> <
        ul id = "eight8"
        className = "listoch" >
        <
        li > < a href = "#" > Find a Store < /a></li >
        <
        li > < a href = "#" > Genius Bar < /a></li >
        <
        li > < a href = "#" > Today at Apple < /a></li >
        <
        li > < a href = "#" > Apple Camp < /a></li >
        <
        li > < a href = "#" > Field Trip < /a></li >
        <
        li > < a href = "#" > Apple Store App < /a></li >
        <
        /ul> <
        h3 id = "nine"
        className = "hedoch" > About Apple < /h3> <
        ul id = "nine9"
        className = "listoch" >
        <
        li > < a href = "#" > Find a Store < /a></li >
        <
        li > < a href = "#" > Genius Bar < /a></li >
        <
        li > < a href = "#" > Today at Apple < /a></li >
        <
        li > < a href = "#" > Apple Camp < /a></li >
        <
        li > < a href = "#" > Field Trip < /a></li >
        <
        li > < a href = "#" > Apple Store App < /a></li >
        <
        /ul> < /
        div > <
        /div> < /
        div > <
        /div> < /
        footer >
        <
        /div>
    );
}