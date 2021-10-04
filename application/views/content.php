<?php

switch ($pageName) {
    case "HOME":
        $this->load->view('home');
        break;

    case "ABOUTUS":
        $this->load->view('about-us');
        break;

    case "BLOG":
        $this->load->view('blog');
        break;

    case "CONTACT":
        $this->load->view('contact');
        break;

    case "FAQ":
        $this->load->view('faq');
        break;

    case "PORTFOLIO":
        $this->load->view('portfolio');
        break;

    case "PORTFOLIOITEMBIG":
        $this->load->view('portfolio-item-big');
        break;

    case "PORTFOLIOITEMVIDEO":
        $this->load->view('portfolio-item-video');
        break;

    case "POST":
        $this->load->view('post');
        break;

    case "PRICING":
        $this->load->view('pricing');
        break;

    case "RESULTS":
        $this->load->view('results');
        break;

    case "SERVICES":
        $this->load->view('services');
        break;

    case "SINGLESERVICE":
        $this->load->view('single-service');
        break;
}

?>