package com.example.project1;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;

import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.util.Base64;
import android.util.Log;
import android.view.MenuItem;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.material.navigation.NavigationView;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class EmployeeProfile extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    private DrawerLayout drawer;
    Toolbar toolbar;
    NavigationView navigationView;
    private String email;
    private TextView em_Name, em_Email, em_Officer_Type, em_Department, em_Supervisor;
    private ImageView emPic;
    private Bitmap pic;
    final private String url = "http://192.168.10.19:5001/person";      //url link

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_employee_profile);
        init();
        FetchEmail();
        FetchProfileData();

        setSupportActionBar(toolbar);

        navigationView.setNavigationItemSelectedListener(this);

        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, drawer, toolbar,
                R.string.navigation_drawer_open, R.string.navigation_drawer_close);

        drawer.addDrawerListener(toggle);
        toggle.syncState();

        if (savedInstanceState == null) {
            getSupportFragmentManager().beginTransaction().replace(R.id.em_fragment_container,
                    new EmProfileFragment()).commit();
            navigationView.setCheckedItem(R.id.nav_em_profile);
        }
    }

    private void FetchEmail() {
        Intent i = getIntent();
        this.email = i.getStringExtra("email");
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

    private void FetchProfileData() {
        RequestQueue requestQueue = Volley.newRequestQueue(this);

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, url, null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            em_Name.setText(response.getString("name"));
                            em_Email.setText(email);
                            em_Officer_Type.setText(response.getString("officer_type"));
                            em_Department.setText(response.getString("department"));
                            em_Supervisor.setText(response.getString("supervisor"));

                            //get pic data
                            pic = stringToImage(response.getString("pic"));
                            emPic.setImageBitmap(pic);

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(EmployeeProfile.this, "ERROR!! " + error, Toast.LENGTH_SHORT).show();
            }
        }) {
            @Override
            protected Map<String, String> getParams() throws AuthFailureError {
                Map<String, String> params = new HashMap<>();
                params.put("email", email);
                return params;
            }
        };
        requestQueue.add(jsonObjectRequest);
    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case R.id.nav_em_profile:
                getSupportFragmentManager().beginTransaction().replace(R.id.em_fragment_container,
                        new EmProfileFragment()).commit();
                break;
            case R.id.nav_em_application:
                getSupportFragmentManager().beginTransaction().replace(R.id.em_fragment_container,
                        new EmApplicationsFragment()).commit();
                break;
            case R.id.nav_em_settings:
                startActivity(new Intent(this, EmSettings.class));
                break;
            case R.id.nav_em_logout:
                startActivity(new Intent(this, EmSignIn.class));
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
                    Intent i = new Intent(EmployeeProfile.this, EmSignIn.class).putExtra("count", true);
                    EmployeeProfile.this.startActivity(i);
                }
            });

            builder.setNegativeButton("NO", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    //do nothing
                    //startActivity(new Intent(EmployeeProfile.this, EmployeeProfile.class));
                }
            });
            AlertDialog alert = builder.create();
            alert.show();
//            super.onBackPressed();
        }
    }

    private void init() {
        toolbar = findViewById(R.id.EmToolbar);
        drawer = findViewById(R.id.employeeDrawerLayout);
        navigationView = findViewById(R.id.Em_nav_view);
        em_Name = findViewById(R.id.emName);
        em_Email = findViewById(R.id.emEmail);
        em_Officer_Type = findViewById(R.id.emOfficerType);
        em_Department = findViewById(R.id.emDepartment);
        em_Supervisor = findViewById(R.id.emSupervisor);
        emPic = findViewById(R.id.em_profile_pic);
    }
}
