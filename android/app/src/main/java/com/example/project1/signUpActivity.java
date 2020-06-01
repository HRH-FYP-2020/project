package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class signUpActivity extends AppCompatActivity {

    public static EditText appID, pre_memID, businessName, businessAddress, BEDate, dobDate, representativeName, designation,
            partnerName, NTN, telephoneNo, telephoneNo2, GST, CNIC, passportNo, mobileNo, mobileNo2,
            email, email2, teleHome, faxNo, UAN, URL, memEmail1, memEmail2;

    private Spinner appType, memType, memClass, memStatus, bankName, mainBusiness, businessInterest, itemImport,
            itemExport, countryImport, countryExport;

    Random random;

    private int mYear, mMonth, mDay;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);
        random = new Random();
        init();
        SpinnerList();
        appID.setText(String.format("%04d", random.nextInt(10000)));
    }

    public void signUpForm(View v) {
//        boolean c = check();
        boolean c = false;       //temporary use. replacement of above line

        if (c) {
            Toast.makeText(this, "PLEASE Fill out the Form", Toast.LENGTH_LONG).show();
        } else {
            Intent i = new Intent(signUpActivity.this, mem_documentActivity.class);
            i.putExtra("appID", appID.getText().toString());
            i.putExtra("app_type", appType.getSelectedItem().toString());
            i.putExtra("pre_memID", pre_memID.getText().toString());
            i.putExtra("mem_type", memType.getSelectedItem().toString());
            i.putExtra("memclass_type", memClass.getSelectedItem().toString());
            i.putExtra("mem_status", memStatus.getSelectedItem().toString());
            i.putExtra("business_Name", businessName.getText().toString());
            i.putExtra("business_Address", businessAddress.getText().toString());
            i.putExtra("representative_Name", representativeName.getText().toString());
            i.putExtra("designation", designation.getText().toString());
            i.putExtra("partner_name", partnerName.getText().toString());
            i.putExtra("bank_name", bankName.getSelectedItem().toString());
            i.putExtra("business_date", BEDate.getText().toString());
            i.putExtra("NTN", NTN.getText().toString());
            i.putExtra("main_Line", mainBusiness.getSelectedItem().toString());
            i.putExtra("telephone_no", telephoneNo.getText().toString());
            i.putExtra("telephone_no2", telephoneNo2.getText().toString());
            i.putExtra("GST", GST.getText().toString());
            i.putExtra("business_interest", businessInterest.getSelectedItem().toString());
            i.putExtra("CNIC", CNIC.getText().toString());
            i.putExtra("passport_no", passportNo.getText().toString());
            i.putExtra("dob", dobDate.getText().toString());
            i.putExtra("mobile_no", mobileNo.getText().toString());
            i.putExtra("mobile_no2", mobileNo2.getText().toString());
            i.putExtra("email", email.getText().toString());
            i.putExtra("email2", email2.getText().toString());
            i.putExtra("telephone_home", teleHome.getText().toString());
            i.putExtra("fax_no", faxNo.getText().toString());
            i.putExtra("UAN", UAN.getText().toString());
            i.putExtra("URL", URL.getText().toString());
            i.putExtra("item_export", itemExport.getSelectedItem().toString());
            i.putExtra("country_export", countryExport.getSelectedItem().toString());
            i.putExtra("item_import", itemImport.getSelectedItem().toString());
            i.putExtra("country_import", countryImport.getSelectedItem().toString());
            i.putExtra("member_email1", memEmail1.getText().toString());
            i.putExtra("member_email2", memEmail2.getText().toString());
            startActivity(i);
//            startActivity(new Intent(this, mem_documentActivity.class));
        }
    }

    public void BusinessDate(View v) {
        final Calendar c = Calendar.getInstance();
        mYear = c.get(Calendar.YEAR);
        mMonth = c.get(Calendar.MONTH);
        mDay = c.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(this,
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        BEDate.setText(dayOfMonth + "-" + (month + 1) + "-" + year);
                    }
                }, mYear, mMonth, mDay);
        datePickerDialog.show();
    }

    public void BirthDate(View v) {
        final Calendar c = Calendar.getInstance();
        mYear = c.get(Calendar.YEAR);
        mMonth = c.get(Calendar.MONTH);
        mDay = c.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(this,
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        dobDate.setText(dayOfMonth + "-" + (month + 1) + "-" + year);
                    }
                }, mYear, mMonth, mDay);
        datePickerDialog.show();
    }

    private boolean check() {
        if (TextUtils.isEmpty(businessName.getText().toString())) {
            businessName.setError("Fill out this part.");
            businessName.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(businessAddress.getText().toString())) {
            businessAddress.setError("Fill out this part.");
            businessAddress.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(representativeName.getText().toString())) {
            representativeName.setError("Fill out this part.");
            representativeName.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(designation.getText().toString())) {
            designation.setError("Fill out this part.");
            designation.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(partnerName.getText().toString())) {
            partnerName.setError("Fill out this part.");
            partnerName.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(NTN.getText().toString())) {
            NTN.setError("Fill out this part.");
            NTN.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(teleHome.getText().toString())) {
            telephoneNo.setError("Fill out this part.");
            telephoneNo.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(telephoneNo2.getText().toString())) {
            telephoneNo2.setError("Fill out this part.");
            telephoneNo2.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(GST.getText().toString())) {
            GST.setError("Fill out this part.");
            GST.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(CNIC.getText().toString())) {
            CNIC.setError("Fill out this part.");
            CNIC.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(passportNo.getText().toString())) {
            passportNo.setError("Fill out this part.");
            passportNo.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(mobileNo.getText().toString())) {
            mobileNo.setError("Fill out this part.");
            mobileNo.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(mobileNo2.getText().toString())) {
            mobileNo2.setError("Fill out this part.");
            mobileNo2.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(email.getText().toString())) {
            email.setError("Fill out this part.");
            email.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(email2.getText().toString())) {
            email2.setError("Fill out this part.");
            email2.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(teleHome.getText().toString())) {
            teleHome.setError("Fill out this part.");
            teleHome.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(faxNo.getText().toString())) {
            faxNo.setError("Fill out this part.");
            faxNo.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(UAN.getText().toString())) {
            UAN.setError("Fill out this part.");
            UAN.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(URL.getText().toString())) {
            URL.setError("Fill out this part.");
            URL.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(memEmail1.getText().toString())) {
            memEmail1.setError("Fill out this part.");
            memEmail1.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(memEmail2.getText().toString())) {
            memEmail2.setError("Fill out this part.");
            memEmail2.requestFocus();
            return true;
        }
        return false;
    }

    public void SpinnerList() {

        ArrayAdapter view1 = ArrayAdapter.createFromResource(this, R.array.app_type, R.layout.spinner_text);
        view1.setDropDownViewResource(R.layout.spinner_text);
        appType.setAdapter(view1);

        ArrayAdapter view2 = ArrayAdapter.createFromResource(this, R.array.membership_type, R.layout.spinner_text);
        view2.setDropDownViewResource(R.layout.spinner_text);
        memType.setAdapter(view2);

        ArrayAdapter view3 = ArrayAdapter.createFromResource(this, R.array.member_class, R.layout.spinner_text);
        view3.setDropDownViewResource(R.layout.spinner_text);
        memClass.setAdapter(view3);

        ArrayAdapter view4 = ArrayAdapter.createFromResource(this, R.array.main_line_of_business, R.layout.spinner_text);
        view4.setDropDownViewResource(R.layout.spinner_text);
        mainBusiness.setAdapter(view4);
        businessInterest.setAdapter(view4);

        ArrayAdapter view5= ArrayAdapter.createFromResource(this, R.array.item, R.layout.spinner_text);
        view5.setDropDownViewResource(R.layout.spinner_text);
        itemImport.setAdapter(view5);
        itemExport.setAdapter(view5);

        ArrayAdapter view6= ArrayAdapter.createFromResource(this, R.array.country, R.layout.spinner_text);
        view6.setDropDownViewResource(R.layout.spinner_text);
        countryImport.setAdapter(view6);
        countryExport.setAdapter(view6);

        ArrayAdapter view7= ArrayAdapter.createFromResource(this, R.array.member_status, R.layout.spinner_text);
        view7.setDropDownViewResource(R.layout.spinner_text);
        memStatus.setAdapter(view7);

        ArrayAdapter view8= ArrayAdapter.createFromResource(this, R.array.bank_name, R.layout.spinner_text);
        view8.setDropDownViewResource(R.layout.spinner_text);
        bankName.setAdapter(view8);

        /*
        ArrayAdapter<String> view1 = new ArrayAdapter<String>(signUpActivity.this,
                android.R.layout.simple_spinner_dropdown_item, getResources().getStringArray(R.array.app_type));
        view1.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        ArrayAdapter<String> view2 = new ArrayAdapter<String>(signUpActivity.this,
                android.R.layout.simple_expandable_list_item_1, getResources().getStringArray(R.array.membership_type));
        view2.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        ArrayAdapter<String> view3 = new ArrayAdapter<String>(signUpActivity.this,
                android.R.layout.simple_expandable_list_item_1, getResources().getStringArray(R.array.member_class));
        view3.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        ArrayAdapter<String> view4 = new ArrayAdapter<String>(signUpActivity.this,
                android.R.layout.simple_expandable_list_item_1, getResources().getStringArray(R.array.main_line_of_business));
        view4.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        ArrayAdapter<String> view5 = new ArrayAdapter<String>(signUpActivity.this,
                android.R.layout.simple_expandable_list_item_1, getResources().getStringArray(R.array.item));
        view5.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        ArrayAdapter<String> view6 = new ArrayAdapter<String>(signUpActivity.this,
                android.R.layout.simple_expandable_list_item_1, getResources().getStringArray(R.array.country));
        view6.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        ArrayAdapter<String> view7 = new ArrayAdapter<String>(signUpActivity.this,
                android.R.layout.simple_expandable_list_item_1, getResources().getStringArray(R.array.member_status));
        view7.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        ArrayAdapter<String> view8 = new ArrayAdapter<String>(signUpActivity.this,
                android.R.layout.simple_expandable_list_item_1, getResources().getStringArray(R.array.bank_name));
        view8.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        appType.setAdapter(view1);
        memType.setAdapter(view2);
        memClass.setAdapter(view3);
        memStatus.setAdapter(view7);
        bankName.setAdapter(view8);
        mainBusiness.setAdapter(view4);
        businessInterest.setAdapter(view4);
        itemImport.setAdapter(view5);
        itemExport.setAdapter(view5);
        countryExport.setAdapter(view6);
        countryImport.setAdapter(view6);
         */
    }

    public void QRcodeScanner(View v) {
//        startActivity(new Intent(signUpActivity.this, ScanCodeCNIC.class));
        startActivity(new Intent(signUpActivity.this, scanOptionsActivity.class));
    }

    public void init() {
        appID = findViewById(R.id.app_id);
        pre_memID = findViewById(R.id.pre_mem_ID);
        businessName = findViewById(R.id.business_Name);
        businessAddress = findViewById(R.id.business_Address);
        representativeName = findViewById(R.id.representative_Name);
        designation = findViewById(R.id.Designation);
        partnerName = findViewById(R.id.partners_Name);
        NTN = findViewById(R.id.ntn_no);
        telephoneNo = findViewById(R.id.telephone_No);
        telephoneNo2 = findViewById(R.id.telephone_No2);
        GST = findViewById(R.id.gst_No);
        CNIC = findViewById(R.id.cnic);
        passportNo = findViewById(R.id.passport_No);
        mobileNo = findViewById(R.id.mobile_No);
        mobileNo2 = findViewById(R.id.mobile_No2);
        email = findViewById(R.id.Email);
        email2 = findViewById(R.id.Email2);
        teleHome = findViewById(R.id.tel_Home);
        faxNo = findViewById(R.id.fax_No);
        UAN = findViewById(R.id.uan);
        URL = findViewById(R.id.url);
        memEmail1 = findViewById(R.id.mem_email1);
        memEmail2 = findViewById(R.id.mem_email2);
        appType = findViewById(R.id.app_Type);
        memType = findViewById(R.id.mem_type);
        memClass = findViewById(R.id.mem_class);
        memStatus = findViewById(R.id.mem_status);
        bankName = findViewById(R.id.bank_name);
        mainBusiness = findViewById(R.id.main_business);
        businessInterest = findViewById(R.id.business_interest);
        itemImport = findViewById(R.id.item_import);
        itemExport = findViewById(R.id.item_export);
        countryImport = findViewById(R.id.country_import);
        countryExport = findViewById(R.id.country_export);
        BEDate = findViewById(R.id.BE_date);
        dobDate = findViewById(R.id.dob_Date);
    }
}
