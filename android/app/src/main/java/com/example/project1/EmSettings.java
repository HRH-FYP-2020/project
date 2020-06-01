package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
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

public class EmSettings extends AppCompatActivity {

    private EditText old_password, new_password, reNew_password;

    private String url = "http://192.168.10.19:8080/register";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_em_settings);
        init();
    }

    public void Submit(View v) {
//        boolean c = check();
        boolean c = true;

        if (c) {
            RequestQueue requestQueue = Volley.newRequestQueue(this);
            StringRequest stringRequest = new StringRequest(Request.Method.POST, url,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            //handle the wrong old password
                            startActivity(new Intent(EmSettings.this, EmployeeProfile.class));
                            Toast.makeText(EmSettings.this, "Password Changed Successfully ", Toast.LENGTH_SHORT).show();
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    //temporary,, REMOVE THIS LINE AFTER COMPLETION
                    startActivity(new Intent(EmSettings.this, reqSubmittedActivity.class));
                    Toast.makeText(EmSettings.this, "ERROR " + error, Toast.LENGTH_LONG).show();
                }
            }) {
                @Override
                protected Map<String, String> getParams() throws AuthFailureError {
                    Map<String, String> params = new HashMap<>();
                    params.put("old_pass", old_password.getText().toString());
                    params.put("new_pass", new_password.getText().toString());
                    params.put("renew_pass", reNew_password.getText().toString());
                    return params;
                }
            };
            requestQueue.add(stringRequest);
        } else {
            Toast.makeText(this, "Fill the Requirements", Toast.LENGTH_SHORT).show();
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
        if (TextUtils.isEmpty(reNew_password.getText().toString())) {
            reNew_password.setError("Fill out this part.");
            reNew_password.requestFocus();
            return false;
        }
        return true;
    }

    private void init() {
        old_password = findViewById(R.id.emoldpassword);
        new_password = findViewById(R.id.emnewpassowrd);
        reNew_password = findViewById(R.id.emrenewpassword);
    }
}
