<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Laravel\Passport\Http\Middleware\CreateFreshApiToken as BasePassport;

class CreateFreshApiToken extends BasePassport
{
    /**
     * Determine if the request should receive a fresh token.
     * Custom here to send the token on POST request as well.
     *
     * @param  Illuminate\Http\Request  $request
     * @return bool
     */
    protected function requestShouldReceiveFreshToken($request)
    {
        return in_array($request->getMethod(), array('GET', 'POST')) && 
                    $request->user($this->guard);
    }
}
