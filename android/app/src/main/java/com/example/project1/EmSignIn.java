package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.util.HashMap;
import java.util.Map;

public class EmSignIn extends AppCompatActivity {

    private EditText email, password;
    private String url = "https://192.168.10.21:5001";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_em_sign_in);
        init();
    }

    public void emSignIn(View v) {
//        boolean c = check();
        boolean c = false;      //testing,, alternate for above line

        if (c) {
            Toast.makeText(this, "Please Fill the requirements", Toast.LENGTH_SHORT).show();
        } else {
            //below line is extra
            startActivity(new Intent(this, EmployeeProfile.class));
            EmployeeSendData();
        }
    }

    private void EmployeeSendData() {
        RequestQueue requestQueue = Volley.newRequestQueue(this);

        StringRequest stringRequest = new StringRequest(Request.Method.POST, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {

                        //return specific key which indicates that given email and pw is correct, otherwise handle is else part

                        Toast.makeText(EmSignIn.this, "Success !!", Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(EmSignIn.this, EmployeeProfile.class).putExtra("email",email.getText().toString()));
                        // to employee profile
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(EmSignIn.this, "ERROR !! " + error, Toast.LENGTH_SHORT).show();
            }
        }) {
            @Override
            protected Map<String, String> getParams() {
                Map<String, String> params = new HashMap<String, String>();
                params.put("email", email.getText().toString());
                params.put("password", password.getText().toString());
                return params;
            }
        };
        requestQueue.add(stringRequest);
    }

    private boolean check() {
        if (TextUtils.isEmpty(email.getText().toString())) {
            email.setError("Fill out this part.");
            email.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(password.getText().toString())) {
            password.setError("Fill out this part.");
            password.requestFocus();
            return true;
        }
        return false;
    }

    @Override
    public void onBackPressed() {
        startActivity(new Intent(this, loginActivity.class));
        EmSignIn.this.finish();
    }

    private void init() {
        email = findViewById(R.id.EmEmail);
        password = findViewById(R.id.EmPassword);
    }
}
