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
import android.util.SparseArray;
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
import com.google.android.gms.vision.Frame;
import com.google.android.gms.vision.text.TextBlock;
import com.google.android.gms.vision.text.TextRecognizer;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class mem_documentActivity extends AppCompatActivity {

    public static final String TAG = "special";
    private Button cnic, ntn, taxReturn, salesTax, salesTaxReturn, photograph, officeSpace, bankCertificate, signature;

    private String appID, pre_memID, businessName, businessAddress, BEDate, dobDate, representativeName, designation,
            partnerName, NTN, telephoneNo, telephoneNo2, GST, CNIC, passportNo, mobileNo, mobileNo2,
            email, email2, teleHome, faxNo, UAN, URL, memEmail1, memEmail2, appType, memType, memClass, memStatus,
            bankName, mainBusiness, businessInterest, itemImport, itemExport, countryImport, countryExport;

    private String OCR_ntn, OCR_taxReturn, OCR_salesTax, OCR_salesTaxReturn, OCR_officeSpace;

    private final int IMG_REQ = 1;

    private Bitmap pic_cnic, pic_ntn, pic_taxReturn, pic_salesTax, pic_salesTaxReturn, pic_photograph,
            pic_officeSpace, pic_bankCertificate, pic_signature;

    private String url = "http://192.168.10.19:8080/register";

    private int flag;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mem_document);
        getFormData();
        init();
    }

    private void getFormData() {
        Intent i = getIntent();
        appID = i.getStringExtra("appID");
        appType = i.getStringExtra("app_type");
        pre_memID = i.getStringExtra("pre_memID");
        memType = i.getStringExtra("mem_type");
        memClass = i.getStringExtra("memclass_type");
        memStatus = i.getStringExtra("mem_status");
        businessName = i.getStringExtra("business_Name");
        businessAddress = i.getStringExtra("business_Address");
        representativeName = i.getStringExtra("representative_Name");
        designation = i.getStringExtra("designation");
        partnerName = i.getStringExtra("partner_name");
        bankName = i.getStringExtra("bank_name");
        BEDate = i.getStringExtra("business_date");
        NTN = i.getStringExtra("NTN");
        mainBusiness = i.getStringExtra("main_Line");
        telephoneNo = i.getStringExtra("telephone_no");
        telephoneNo2 = i.getStringExtra("telephone_no2");
        GST = i.getStringExtra("GST");
        businessInterest = i.getStringExtra("business_interest");
        CNIC = i.getStringExtra("CNIC");
        passportNo = i.getStringExtra("passport_no");
        dobDate = i.getStringExtra("dob");
        mobileNo = i.getStringExtra("mobile_no");
        mobileNo2 = i.getStringExtra("mobile_no2");
        email = i.getStringExtra("email");
        email2 = i.getStringExtra("email2");
        teleHome = i.getStringExtra("telephone_home");
        faxNo = i.getStringExtra("fax_no");
        UAN = i.getStringExtra("UAN");
        URL = i.getStringExtra("URL");
        itemExport = i.getStringExtra("item_export");
        countryExport = i.getStringExtra("country_export");
        itemImport = i.getStringExtra("item_import");
        countryImport = i.getStringExtra("country_import");
        memEmail1 = i.getStringExtra("member_email1");
        memEmail2 = i.getStringExtra("member_email2");
    }

    public void Upload(View v) {
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
        Log.i(TAG, "onActivityResult: a value " + flag);
        if (requestCode == IMG_REQ && resultCode == RESULT_OK && data != null) {
            Uri path = data.getData();
            try {
                if (flag == 1) {
                    pic_cnic = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    cnic.setText(R.string.doc_uploaded);
                } else if (flag == 2) {
                    pic_ntn = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    ntn.setText(R.string.doc_uploaded);
                    OCRProcess(flag);
                } else if (flag == 3) {
                    pic_taxReturn = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    taxReturn.setText(R.string.doc_uploaded);
                    OCRProcess(flag);
                } else if (flag == 4) {
                    pic_salesTax = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    salesTax.setText(R.string.doc_uploaded);
                    OCRProcess(flag);
                } else if (flag == 5) {
                    pic_salesTaxReturn = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    salesTaxReturn.setText(R.string.doc_uploaded);
                    OCRProcess(flag);
                } else if (flag == 6) {
                    pic_photograph = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    photograph.setText(R.string.doc_uploaded);
                } else if (flag == 7) {
                    pic_officeSpace = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    officeSpace.setText(R.string.doc_uploaded);
                    OCRProcess(flag);
                } else if (flag == 8) {
                    pic_bankCertificate = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    bankCertificate.setText(R.string.doc_uploaded);
                } else if (flag == 9) {
                    pic_signature = MediaStore.Images.Media.getBitmap(getContentResolver(), path);
                    signature.setText(R.string.doc_uploaded);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void submit(View v) {

//        boolean c = check();
        boolean c = true;

        if (c) {
            RequestQueue requestQueue = Volley.newRequestQueue(this);
            StringRequest stringRequest = new StringRequest(Request.Method.POST, url,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            Toast.makeText(mem_documentActivity.this, "Success " + response, Toast.LENGTH_SHORT).show();
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Toast.makeText(mem_documentActivity.this, "ERROR " + error, Toast.LENGTH_LONG).show();
                    Log.i(TAG, "onErrorResponse: line 139 " + error);
                }
            }) {
                @Override
                protected Map<String, String> getParams() throws AuthFailureError {
                    Map<String, String> params = new HashMap<>();
                    //previous form data
                    params.put("appID", appID);
                    params.put("app_type", appType);
                    params.put("pre_memID", pre_memID);
                    params.put("mem_type", memType);
                    params.put("memclass_type", memClass);
                    params.put("mem_status", memStatus);
                    params.put("business_Name", businessName);
                    params.put("business_Address", businessAddress);
                    params.put("representative_name", representativeName);
                    params.put("designation", designation);
                    params.put("partner_name", partnerName);
                    params.put("bank_name", bankName);
                    params.put("business_date", BEDate);
                    params.put("NTN", NTN);
                    params.put("main_line", mainBusiness);
                    params.put("telephone_no", telephoneNo);
                    params.put("telephone_no2", telephoneNo2);
                    params.put("GST", GST);
                    params.put("business_interest", businessInterest);
                    params.put("CNIC", CNIC);
                    params.put("passport_no", passportNo);
                    params.put("dob", dobDate);
                    params.put("mobile_no", mobileNo);
                    params.put("mobile_no2", mobileNo2);
                    params.put("email", email);
                    params.put("email2", email2);
                    params.put("telephone_home", teleHome);
                    params.put("fax_no", faxNo);
                    params.put("UAN", UAN);
                    params.put("URL", URL);
                    params.put("item_export", itemExport);
                    params.put("country_export", countryExport);
                    params.put("item_import", itemImport);
                    params.put("country_import", countryImport);
                    params.put("member_email1", memEmail1);
                    params.put("member_email2", memEmail2);

                    /*
                    //document data
                    params.put("pic_cnic", imageToString(pic_cnic));
                    params.put("pic_ntn", imageToString(pic_ntn));
                    params.put("pic_taxReturns", imageToString(pic_taxReturn));
                    params.put("pic_salesTax", imageToString(pic_salesTax));
                    params.put("pic_salesTaxReturns", imageToString(pic_salesTaxReturn));
                    params.put("pic_photo", imageToString(pic_photograph));
                    params.put("pic_officeSpace", imageToString(pic_officeSpace));
                    params.put("pic_bankCertificate", imageToString(pic_bankCertificate));
                    params.put("pic_signature", imageToString(pic_signature));
                    */

                    params.put("OCR_ntn", OCR_ntn);
                    params.put("OCR_taxReturn", OCR_taxReturn);
                    params.put("OCR_salesTax", OCR_salesTax);
                    params.put("OCR_salesTaxReturn", OCR_salesTaxReturn);
                    params.put("OCR_officeSpace", OCR_officeSpace);

                    return params;
                }
            };
            requestQueue.add(stringRequest);

            Intent i = new Intent(this, loginActivity.class);
//            Toast.makeText(this, "Form Submitted Successfully! We will inform you through given Email.", Toast.LENGTH_LONG).show();
            startActivity(i);
        } else {
            Toast.makeText(this, "Upload the requirements", Toast.LENGTH_SHORT).show();
        }
    }

    private String imageToString(Bitmap bitmap) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
        byte[] imgBytes = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(imgBytes, Base64.DEFAULT);
    }

    private void OCRProcess(int tag) {
        TextRecognizer textRecognizer = new TextRecognizer.Builder(getApplicationContext()).build();
        Frame frame = null;

        if (!textRecognizer.isOperational()) {
            Toast.makeText(this, "Error not read", Toast.LENGTH_SHORT).show();
        } else {
            if (tag == 2) {
                frame = new Frame.Builder().setBitmap(pic_ntn).build();
            } else if (tag == 3) {
                frame = new Frame.Builder().setBitmap(pic_taxReturn).build();
            } else if (tag == 4) {
                frame = new Frame.Builder().setBitmap(pic_salesTax).build();
            } else if (tag == 5) {
                frame = new Frame.Builder().setBitmap(pic_salesTaxReturn).build();
            } else if (tag == 7) {
                frame = new Frame.Builder().setBitmap(pic_officeSpace).build();
            }

            SparseArray<TextBlock> items = textRecognizer.detect(frame);
            StringBuilder stringBuilder = new StringBuilder();

            for (int i = 0; i < items.size(); ++i) {
                TextBlock myitems = items.valueAt(i);
                stringBuilder.append(myitems.getValue());
                stringBuilder.append("  ");
            }

            if (tag == 2) {
                OCR_ntn = stringBuilder.toString();
            } else if (tag == 3) {
                OCR_taxReturn = stringBuilder.toString();
            } else if (tag == 4) {
                OCR_salesTax = stringBuilder.toString();
            } else if (tag == 5) {
                OCR_salesTaxReturn = stringBuilder.toString();
            } else if (tag == 7) {
                OCR_officeSpace = stringBuilder.toString();
            }

            Log.i(TAG, "OCRProcess: " + OCR_ntn);
            Log.i(TAG, "OCRProcess: " + OCR_taxReturn);
            Log.i(TAG, "OCRProcess: " + OCR_salesTax);
            Log.i(TAG, "OCRProcess: " + OCR_salesTaxReturn);
            Log.i(TAG, "OCRProcess: " + OCR_officeSpace);
        }
    }

    private boolean check() {
        if (pic_cnic == null) {
            return false;
        }
        if (pic_ntn == null) {
            return false;
        }
        if (pic_taxReturn == null) {
            return false;
        }
        if (pic_salesTax == null) {
            return false;
        }
        if (pic_salesTaxReturn == null) {
            return false;
        }
        if (pic_photograph == null) {
            return false;
        }
        if (pic_officeSpace == null) {
            return false;
        }
        if (pic_bankCertificate == null) {
            return false;
        }
        if (pic_signature == null) {
            return false;
        }
        return true;
    }

    private void init() {
        cnic = findViewById(R.id.doc_cnic);
        ntn = findViewById(R.id.doc_ntn);
        taxReturn = findViewById(R.id.doc_taxReturn);
        salesTax = findViewById(R.id.doc_salesTax);
        salesTaxReturn = findViewById(R.id.doc_salesTaxReturn);
        photograph = findViewById(R.id.doc_pic);
        officeSpace = findViewById(R.id.doc_officeSpace);
        bankCertificate = findViewById(R.id.doc_bankCertificate);
        signature = findViewById(R.id.doc_sign);
    }
}
