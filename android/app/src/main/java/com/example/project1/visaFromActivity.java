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

public class visaFromActivity extends AppCompatActivity {

    Button visaReq_Letterhead, passport, cnic_Front, cnic_Back, invite_Letter,
            employee_List, employee_Application_Letter, appointment_Letter;

    private Bitmap pic_visaReqLetter, pic_passport, pic_cnicFront, pic_cnicBack, pic_inviteLetter,
            pic_employeeList, pic_employeeAppLetter, pic_appointmentLetter;


    public static final String TAG = "special";
    private final int IMG_REQ = 1;
    private String url = "http://192.168.0.1/android/image";

    private int flag;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_visa_from);
        init();
    }

    public void UploadDOC(View v) {
        this.flag = Integer.parseInt((String) v.getTag());
        Intent i = new Intent();
        i.setType("image/*");
        i.setAction(Intent.ACTION_GET_CONTENT);
        startActivityForResult(i, IMG_REQ);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Log.i(TAG, "onActivityResult: called reqcode " + requestCode + " result code " + resultCode);
        if (requestCode == IMG_REQ && resultCode == RESULT_OK && data != null) {
            Uri path = data.getData();
            Log.i(TAG, "onActivityResult: flag value " + flag);
            try {
                if (flag == 1) {
                    pic_visaReqLetter = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    visaReq_Letterhead.setText(R.string.doc_uploaded);
                } else if (flag == 2) {
                    pic_passport = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    passport.setText(R.string.doc_uploaded);
                } else if (flag == 3) {
                    pic_cnicFront = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    cnic_Front.setText(R.string.doc_uploaded);
                } else if (flag == 4) {
                    pic_cnicBack = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    cnic_Back.setText(R.string.doc_uploaded);
                } else if (flag == 5) {
                    pic_inviteLetter = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    invite_Letter.setText(R.string.doc_uploaded);
                } else if (flag == 6) {
                    pic_employeeList = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    employee_List.setText(R.string.doc_uploaded);
                } else if (flag == 7) {
                    pic_employeeAppLetter = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    employee_Application_Letter.setText(R.string.doc_uploaded);
                } else if (flag == 8) {
                    pic_appointmentLetter = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    appointment_Letter.setText(R.string.doc_uploaded);
                }
                Log.i(TAG, "onActivityResult: flag end value " + flag);

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

    public void submitVisaForm(View v) {

        boolean c = check();

        if (c) {
            RequestQueue requestQueue = Volley.newRequestQueue(this);
            StringRequest stringRequest = new StringRequest(Request.Method.POST, url,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            Toast.makeText(visaFromActivity.this, "Success " + response, Toast.LENGTH_SHORT).show();
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Toast.makeText(visaFromActivity.this, "ERROR " + error, Toast.LENGTH_LONG).show();
                    Log.i(TAG, "onErrorResponse: line 128 " + error);
                }
            }) {
                @Override
                protected Map<String, String> getParams() throws AuthFailureError {
                    Map<String, String> params = new HashMap<>();
                    params.put("pic_visaReqLetter", imageToString(pic_visaReqLetter));
                    params.put("pic_passport", imageToString(pic_passport));
                    params.put("pic_cnicFront", imageToString(pic_cnicFront));
                    params.put("pic_cnicBack", imageToString(pic_cnicBack));
                    params.put("pic_inviteLetter", imageToString(pic_inviteLetter));
                    params.put("pic_employeeList", imageToString(pic_employeeList));
                    params.put("pic_employeeAppLetter", imageToString(pic_employeeAppLetter));
                    params.put("pic_appointmentLetter", imageToString(pic_appointmentLetter));
                    return params;
                }
            };
            requestQueue.add(stringRequest);

            Intent i = new Intent(this, reqSubmittedActivity.class);
            startActivity(i);
        } else {
            Toast.makeText(this, "Kindly Upload the required Documents", Toast.LENGTH_SHORT).show();
        }
    }

    private boolean check() {
        if (pic_visaReqLetter == null) {
            return false;
        }
        if (pic_passport == null) {
            return false;
        }
        if (pic_cnicFront == null) {
            return false;
        }
        if (pic_cnicBack == null) {
            return false;
        }
        if (pic_inviteLetter == null) {
            return false;
        }
        if (pic_employeeList == null) {
            return false;
        }
        if (pic_employeeAppLetter == null) {
            return false;
        }
        if (pic_appointmentLetter == null) {
            return false;
        }
        return true;
    }

    private void init() {
        visaReq_Letterhead = findViewById(R.id.VisaReqLetterhead);
        passport = findViewById(R.id.passport);
        cnic_Front = findViewById(R.id.cnicFront);
        cnic_Back = findViewById(R.id.cnicBack);
        invite_Letter = findViewById(R.id.inviteLetter);
        employee_List = findViewById(R.id.employeeList);
        employee_Application_Letter = findViewById(R.id.employeeApplicationLetter);
        appointment_Letter = findViewById(R.id.appointmentLetter);
    }
}
