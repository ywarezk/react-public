/**
 * component that displays login form on the screen
 */

import React from 'react';

export default function Login() {
    return (
        <form>
            <div className="form-group">
                <label>
                    Email
                </label>
                <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
                <label>
                    Password
                </label>
                <input type="password" name="password" className="form-control" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
    )
}