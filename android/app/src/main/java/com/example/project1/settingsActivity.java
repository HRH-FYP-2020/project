package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.util.HashMap;
import java.util.Map;

public class settingsActivity extends AppCompatActivity {

    private EditText old_password, new_password, renew_password;

    private String url = "http://192.168.10.19:8080/register";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_settings);
        init();
    }

    public void done(View v) {

//        boolean c = check();
        boolean c = true;

        if (c) {
            RequestQueue requestQueue = Volley.newRequestQueue(this);
            StringRequest stringRequest = new StringRequest(Request.Method.POST, url,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            //handle the wrong old password
                            startActivity(new Intent(settingsActivity.this, profileActivity.class));
                            Toast.makeText(settingsActivity.this, "Password Changed Successfully ", Toast.LENGTH_SHORT).show();
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    //temporary,, REMOVE THIS LINE AFTER COMPLETION
                    startActivity(new Intent(settingsActivity.this, reqSubmittedActivity.class));
                    Toast.makeText(settingsActivity.this, "ERROR " + error, Toast.LENGTH_LONG).show();
                }
            }) {
                @Override
                protected Map<String, String> getParams() throws AuthFailureError {
                    Map<String, String> params = new HashMap<>();
                    params.put("old_pass", old_password.getText().toString());
                    params.put("new_pass", new_password.getText().toString());
                    params.put("renew_pass", renew_password.getText().toString());
                    return params;
                }
            };
            requestQueue.add(stringRequest);
        } else {
            Toast.makeText(this, "Fill the requirements", Toast.LENGTH_SHORT).show();
        }
    }

    private boolean check() {
        if (TextUtils.isEmpty(old_password.getText().toString())) {
            old_password.setError("Fill out this part.");
            old_password.requestFocus();
            return false;
        }
        if (TextUtils.isEmpty(new_password.getText().toString())) {
            new_password.setError("Fill out this part.");
            new_password.requestFocus();
            return false;
        }
        if (TextUtils.isEmpty(renew_password.getText().toString())) {
            renew_password.setError("Fill out this part.");
            renew_password.requestFocus();
            return false;
        }
        return true;
    }

    private void init() {
        old_password = findViewById(R.id.oldpassword);
        new_password = findViewById(R.id.newpassowrd);
        renew_password = findViewById(R.id.renewpassword);
    }
}
