package com.example.project1;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;

import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;

import android.util.Base64;
import android.util.Log;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.material.navigation.NavigationView;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class profileActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    private static final String TAG = "special1";
    private DrawerLayout drawer;
    Toolbar toolbar;
    NavigationView navigationView;
    final private String url = "http://192.168.10.2:5001/person";
    private String email;
    TextView name_New, surname_New, email_New, rank_New, business_New, business_Address_New, mobile_No_New, fax_No_New;
    private Bitmap pic;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);
        this.email = getIntent().getStringExtra("email");      //email of the person who logged in
        Log.i(TAG, "onCreate: email =" + email);
        init();
        initNew();


        Bundle bundle = new Bundle();
        bundle.putString("email",email);
        ProfileFragment pf = new ProfileFragment();
        pf.setArguments(bundle);

//        FetchData();

//        getData();      //get data of specific member from server

        setSupportActionBar(toolbar);

        navigationView.setNavigationItemSelectedListener(this);

        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, drawer, toolbar,
                R.string.navigation_drawer_open, R.string.navigation_drawer_close);

        drawer.addDrawerListener(toggle);
        toggle.syncState();

        if (savedInstanceState == null) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new ProfileFragment()).commit();
            navigationView.setCheckedItem(R.id.nav_profile);
        }
    }

    private void getData() {                    //here we are sending the email to fetch the data against that email
        Log.i(TAG, "getData: ");
        RequestQueue requestQueue = Volley.newRequestQueue(this);

        StringRequest stringRequest = new StringRequest(Request.Method.POST, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                Log.i(TAG, "onResponse: ");
//                FetchData();
//                if (response.equals("ok")) {
//                    FetchData();
//                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i(TAG, "onErrorResponse: " + error);
                Toast.makeText(profileActivity.this, "ERROR!! " + error, Toast.LENGTH_SHORT).show();
            }
        }) {
            @Override
            protected Map<String, String> getParams() {
                Map<String, String> params = new HashMap<String, String>();
                params.put("email", email);
                Log.i(TAG, "getParams: " + params);
                return params;
            }
        };
        requestQueue.add(stringRequest);
    }

    private Bitmap stringToImage(String encodedString) {
        try {
            byte[] encodeByte = Base64.decode(encodedString, Base64.DEFAULT);
            Bitmap bitmap = BitmapFactory.decodeByteArray(encodeByte, 0, encodeByte.length);
            return bitmap;
        } catch (Exception e) {
            e.getMessage();
            return null;
        }
    }

    private void FetchData() {       //here we fetch all the data against that email
        Log.i(TAG, "FetchData: ");
        RequestQueue requestQueue = Volley.newRequestQueue(this);

       /* StringRequest req = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                Log.i(TAG, "onResponse: " + response);
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i(TAG, "onErrorResponse: " + error);
                Toast.makeText(profileActivity.this, "ERROR!! " + error, Toast.LENGTH_SHORT).show();
            }
        });*/

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, url, null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        Log.i(TAG, "onResponse: " + response);
                        try {
                            Log.i(TAG, "onResponse: in try method");
                            //name,surname, email, pic
                            String rank1 = response.getString("rank");
                            String business1 = response.getString("business");
                            String bus_ad = response.getString("business_address");
                            String mob = response.getString("mobile_No");
                            String faxN = response.getString("fax_No");
//                            pic = stringToImage(response.getString("pics"));
                            Log.i(TAG, "onResponse: " + rank1 + " " + business1 + " " + bus_ad + " " + mob + " " + faxN);
//                            rank = findViewById(R.id.rank);
                            name_New.setText(response.getString("name"));
                            surname_New.setText(response.getString("surname"));
                            email_New.setText(email);
                            rank_New.setText(rank1);
                            business_New.setText(business1);
                            business_Address_New.setText(bus_ad);
                            mobile_No_New.setText(mob);
                            fax_No_New.setText(faxN);
//                            rank.setText(response.getString("rank"));
//                            business.setText(response.getString("business"));
//                            business_Address.setText(response.getString("business_address"));
//                            mobile_No.setText(response.getString("mobile_No"));
//                            fax_No.setText(response.getString("fax_No"));
                            Log.i(TAG, "onResponse: try end");
                        } catch (JSONException e) {
                            Log.i(TAG, "onResponse: " + e);
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i(TAG, "onErrorResponse: " + error);
                Toast.makeText(profileActivity.this, "ERROR!! " + error, Toast.LENGTH_SHORT).show();
            }
        });
        requestQueue.add(jsonObjectRequest);
//        requestQueue.add(req);
        Log.i(TAG, "FetchData: last line");
    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case R.id.nav_profile:
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                        new ProfileFragment()).commit();
                break;
            case R.id.nav_notification:
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                        new EventFragment()).commit();
                break;

            case R.id.nav_visaFrom:
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                        new VisaFromFragment()).commit();
                break;

            case R.id.nav_visaTo:
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                        new VisaToFragment()).commit();
                break;

            case R.id.nav_settings:
                startActivity(new Intent(this, settingsActivity.class));
                break;

            case R.id.nav_logout:
                startActivity(new Intent(this, loginActivity.class).putExtra("count", 1));
                profileActivity.this.finish();
//                startActivity(new Intent(this, loginActivity.class).putExtra("count", true));
//                Toast.makeText(this, "logout", Toast.LENGTH_SHORT).show();
                break;

            case R.id.aboutProject:
                startActivity(new Intent(this, aboutProject.class));
                break;

            case R.id.aboutUs:
                startActivity(new Intent(this, aboutUs.class));
                break;
        }
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    @Override
    public void onBackPressed() {
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setTitle("Confirm?");
            builder.setMessage("Do you want to Logout?");

            builder.setPositiveButton("YES", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    Intent i = new Intent(profileActivity.this, loginActivity.class).putExtra("count", true);
                    profileActivity.this.startActivity(i);
                    profileActivity.this.finish();
                }
            });

            builder.setNegativeButton("NO", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    //do nothing
                    //startActivity(new Intent(profileActivity.this, profileActivity.class));
                }
            });
            AlertDialog alert = builder.create();
            alert.show();
//            super.onBackPressed();
        }
    }

    private void init() {
        toolbar = findViewById(R.id.toolbar);
        drawer = findViewById(R.id.drawer_layout);
        navigationView = findViewById(R.id.nav_view);
    }

    //extra
    private void initNew() {
        name_New = findViewById(R.id.name);
        surname_New = findViewById(R.id.surname);
        email_New = findViewById(R.id.email_profile);
        rank_New = findViewById(R.id.rank);
        business_New = findViewById(R.id.business);
        business_Address_New = findViewById(R.id.businessAddress);
        mobile_No_New = findViewById(R.id.mobileNumber);
        fax_No_New = findViewById(R.id.faxNo);
    }
}

