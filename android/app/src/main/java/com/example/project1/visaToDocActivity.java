package com.example.project1;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class visaToDocActivity extends AppCompatActivity {

    private String organisation_Name, person_Name, designation, visit_Purpose, project_Name,
            funding_Organization, stay_Address, visit_City, noOf_Person, stay_Duration, flight_arrival_Date,
            flight_Arrival_No, flight_Departure_Date, flight_Departure_No, agenda_Details;

    Button req_of_Company, person_passport, invite_Letter;

    public static final String TAG = "special";
    private final int IMG_REQ = 1;
    private int flag;

    private Bitmap pic_reqof_Company, pic_personPassport, pic_inviteLetter;

    private String url = "http://192.168.0.1/android/image";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_visa_to_doc);
        getData();
        init();
    }

    private void getData() {
        Intent i = getIntent();
        organisation_Name = i.getStringExtra("org_name");
        person_Name = i.getStringExtra("person_name");
        designation = i.getStringExtra("designation");
        visit_Purpose = i.getStringExtra("visit_purpose");
        project_Name = i.getStringExtra("project_name");
        funding_Organization = i.getStringExtra("funding_org");
        stay_Address = i.getStringExtra("stay_address");
        visit_City = i.getStringExtra("visit_city");
        noOf_Person = i.getStringExtra("no_of_person");
        stay_Duration = i.getStringExtra("stay_duration");
        flight_arrival_Date = i.getStringExtra("flight_arrival_date");
        flight_Arrival_No = i.getStringExtra("flight_arrival_no");
        flight_Departure_Date = i.getStringExtra("flight_departure_date");
        flight_Departure_No = i.getStringExtra("flight_departure_no");
        agenda_Details = i.getStringExtra("agenda_details");
    }

    public void UploadDoc(View v) {
        this.flag = Integer.parseInt((String) v.getTag());
        Intent i = new Intent();
        i.setType("image/*");
        i.setAction(Intent.ACTION_GET_CONTENT);
        startActivityForResult(i, IMG_REQ);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == IMG_REQ && resultCode == RESULT_OK && data != null) {
            Uri path = data.getData();
            try {
                if (flag == 1) {
                    pic_reqof_Company = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    req_of_Company.setText(R.string.doc_uploaded);
                } else if (flag == 2) {
                    pic_personPassport = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    person_passport.setText(R.string.doc_uploaded);
                } else if (flag == 3) {
                    pic_inviteLetter = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    invite_Letter.setText(R.string.doc_uploaded);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private String imageToString(Bitmap bitmap) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
        byte[] imgBytes = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(imgBytes, Base64.DEFAULT);
    }

    public void visaTo_submitted(View v) {

//        boolean c = check();
        boolean c = true;

        if (c) {
            RequestQueue requestQueue = Volley.newRequestQueue(this);
            StringRequest stringRequest = new StringRequest(Request.Method.POST, url,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            Toast.makeText(visaToDocActivity.this, "Success " + response, Toast.LENGTH_SHORT).show();
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Toast.makeText(visaToDocActivity.this, "ERROR " + error, Toast.LENGTH_LONG).show();
                    Log.i(TAG, "onErrorResponse: line 98 " + error);
                }
            }) {
                @Override
                protected Map<String, String> getParams() throws AuthFailureError {
                    Map<String, String> params = new HashMap<>();
                    //form details
                    params.put("org_name", organisation_Name);
                    params.put("person_name", person_Name);
                    params.put("designation", designation);
                    params.put("visit_purpose", visit_Purpose);
                    params.put("project_name", project_Name);
                    params.put("funding_org", funding_Organization);
                    params.put("stay_address", stay_Address);
                    params.put("visit_city", visit_City);
                    params.put("no_of_person", noOf_Person);
                    params.put("stay_duration", stay_Duration);
                    params.put("flight_arrival_date", flight_arrival_Date);
                    params.put("flight_arrival_no", flight_Arrival_No);
                    params.put("flight_departure_date", flight_Departure_Date);
                    params.put("flight_departure_no", flight_Departure_No);
                    params.put("agenda_details", agenda_Details);

                    //documents
                    params.put("pic_reqOfCompany", imageToString(pic_reqof_Company));
                    params.put("pic_personPassport", imageToString(pic_personPassport));
                    params.put("pic_inviteLetter", imageToString(pic_inviteLetter));

                    return params;
                }
            };
            requestQueue.add(stringRequest);

            Intent i = new Intent(this, reqSubmittedActivity.class);
            startActivity(i);
        } else {
            Toast.makeText(this, "Please Upload the requirements", Toast.LENGTH_SHORT).show();
        }
    }

    private boolean check() {
        if (pic_reqof_Company == null) {
            return false;
        }
        if (pic_personPassport == null) {
            return false;
        }
        if (pic_inviteLetter == null) {
            return false;
        }
        return true;
    }

    private void init() {
        req_of_Company = findViewById(R.id.Req_of_Company);
        person_passport = findViewById(R.id.person_passport);
        invite_Letter = findViewById(R.id.invite_letter);
    }
}
