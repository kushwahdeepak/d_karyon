<?php
/**
 * Created by PhpStorm.
 * User: ashwin
 * Date: 21/1/18
 * Time: 3:12 PM
 */

class HomeController extends CI_Controller
{
    public function index() {
        $data['pageName'] = 'HOME';
        $this->load->view('content-handler', $data);
    }

    public function about_us() {
        $data['pageName'] = 'ABOUTUS';
        $this->load->view('content-handler', $data);
    }

    public function blog() {
        $data['pageName'] = 'BLOG';
        $this->load->view('content-handler', $data);
    }

    public function contact() {
        $data['pageName'] = 'CONTACT';
        $this->load->view('content-handler', $data);
    }

    public function faq() {
        $data['pageName'] = 'FAQ';
        $this->load->view('content-handler', $data);
    }

    public function portfolio() {
        $data['pageName'] = 'PORTFOLIO';
        $this->load->view('content-handler', $data);
    }

    public function portfolio_item_big() {
        $data['pageName'] = 'PORTFOLIOITEMBIG';
        $this->load->view('content-handler', $data);
    }

    public function portfolio_item_video() {
        $data['pageName'] = 'PORTFOLIOITEMVIDEO';
        $this->load->view('content-handler', $data);
    }

    public function post() {
        $data['pageName'] = 'POST';
        $this->load->view('content-handler', $data);
    }

    public function pricing() {
        $data['pageName'] = 'PRICING';
        $this->load->view('content-handler', $data);
    }

    public function results() {
        $data['pageName'] = 'RESULTS';
        $this->load->view('content-handler', $data);
    }

    public function services() {
        $data['pageName'] = 'SERVICES';
        $this->load->view('content-handler', $data);
    }

    public function single_service()
    {
        $data['pageName'] = 'SINGLESERVICE';
        $this->load->view('content-handler', $data);
    }
}