package com.example.project1;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class loginActivity extends AppCompatActivity {

    String TAG = "DEBUG";
    EditText email, password;
    String e,p;
    final String url = "https://96bee5c6f1d5.ngrok.io/user/login";     //link of localhost

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        init();
    }

    public void signUp(View v) {
        Intent i = new Intent(this, signUpActivity.class);
        startActivity(i);
    }

    public void signIn(View v) {

//        boolean c = check();
        boolean c = false;
        //temporary. to login without any requirements
//        Intent i = new Intent(this, profileActivity.class).putExtra("email", email.getText().toString());
//        startActivity(i);
//        loginActivity.this.finish();

        this.e = email.getText().toString();
        this.p = password.getText().toString();

        JSONObject mainJson  = new JSONObject();
        JSONObject userJson  = new JSONObject();
        try {
            userJson.put("email", e);
            userJson.put("password", p);
            mainJson.put("user", userJson);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        RequestQueue requestQueue = Volley.newRequestQueue(this);
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, url, mainJson,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        Log.i(TAG, "onResponse: " + response);

                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i(TAG, "onErrorResponse: " + error);
//                Toast.makeText(ProfileFragment.this, "ERROR!! " + error, Toast.LENGTH_SHORT).show();
            }
        }) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                HashMap<String, String> headers = new HashMap<String, String>();
                headers.put("Content-Type", "application/json");
                return headers;
            }
        };
        requestQueue.add(jsonObjectRequest);
        /*
        if (c) {
            Toast.makeText(this, "PLEASE Fill out the Requirements.", Toast.LENGTH_LONG).show();
        } else {
            RequestQueue requestQueue = Volley.newRequestQueue(this);

            StringRequest stringRequest = new StringRequest(Request.Method.POST, url, new Response.Listener<String>() {
                @Override
                public void onResponse(String response) {
                    //handle wrong inputs
                    Toast.makeText(loginActivity.this, "Data Sent", Toast.LENGTH_SHORT).show();
                    startActivity(new Intent(loginActivity.this, profileActivity.class).putExtra("email", email.getText().toString()));
                }
            }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
//                    Toast.makeText(loginActivity.this, "Connection Lost. Please Try again later", Toast.LENGTH_SHORT).show();
                    Toast.makeText(loginActivity.this, "Error (send)!! " + error, Toast.LENGTH_SHORT).show();
                    Log.i("tag", "onErrorResponse: (post)" + error);
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

            //temporary. to login without any requirements
            Intent i = new Intent(this, profileActivity.class).putExtra("email", email.getText().toString());
            startActivity(i);
            loginActivity.this.finish();
        }
*/
    }



//    public JSONObject abc(){
////        return "{\"email\":\""+e+"\",\"password\":\""+p+"\"}";
//        JSONObject jsonObject = new JSONObject();
//        JSONObject userJson = new JSONObject();
//        userJson.put("name", name);
//        userJson.put("age", age);
//        jsonObject.put("user", userJson);
//        return jsonObject;
//    }

    public void Employee_SignIn(View v) {
        startActivity(new Intent(this, EmSignIn.class));
    }

    @Override
    public void onBackPressed() {

        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Confirm?");
        builder.setMessage("Do you want to exit?");

        builder.setPositiveButton("YES", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
//                System.exit(0);
                finish();
            }
        });
        builder.setNegativeButton("NO", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                //do nothing
            }
        });
        AlertDialog alert = builder.create();
        alert.show();


        /*
        Log.i("tag", "onBackPressed: 1st "+ check);
        if(check == 1){
            Log.i("tag", "onBackPressed: 2nd "+ check);
            System.exit(1);
            check = 1;
        }else{
            Log.i("tag", "onBackPressed: 3rd "+ check);
            Intent intent = new Intent(this, loginActivity.class);
            intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP |
                    Intent.FLAG_ACTIVITY_CLEAR_TASK |
                    Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(intent);
            check = 0;
        }
         */
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

    public void init() {
        email = findViewById(R.id.email);
        password = findViewById(R.id.pw);
    }
}