package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.Spinner;
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

public class visatoFormActivity extends AppCompatActivity {

    private EditText organisation_Name, person_Name, designation, visit_Purpose, project_Name,
            funding_Organization, stay_Address, visit_City, noOf_Person, stay_Duration, flight_arrival_Date,
            flight_Arrival_No, flight_Departure_Date, flight_Departure_No, agenda_Details;

    private Spinner sp1;

    private int mYear, mMonth, mDay;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_visato_form);

        init();
        SpinnerList();
    }

    private void SpinnerList() {

        ArrayAdapter ad= ArrayAdapter.createFromResource(this, R.array.app_type, R.layout.spinner_text);
        ad.setDropDownViewResource(R.layout.spinner_text);
        sp1.setAdapter(ad);

        /*
        ArrayAdapter<String> ad = new ArrayAdapter<String>(visatoFormActivity.this,
                android.R.layout.simple_expandable_list_item_1, getResources().getStringArray(R.array.app_type));
        ad.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        sp1.setAdapter(ad);
         */
    }

    public void FlightArrivalDate(View v) {
        final Calendar c = Calendar.getInstance();
        mYear = c.get(Calendar.YEAR);
        mMonth = c.get(Calendar.MONTH);
        mDay = c.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(this,
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        flight_arrival_Date.setText(dayOfMonth + "-" + (month + 1) + "-" + year);
                    }
                }, mYear, mMonth, mDay);
        datePickerDialog.show();
    }

    public void FlightDepartureDate(View v) {
        final Calendar c = Calendar.getInstance();
        mYear = c.get(Calendar.YEAR);
        mMonth = c.get(Calendar.MONTH);
        mDay = c.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(this,
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        flight_Departure_Date.setText(dayOfMonth + "-" + (month + 1) + "-" + year);
                    }
                }, mYear, mMonth, mDay);
        datePickerDialog.show();
    }

    public void submit_form(View v) {

//        boolean c = check();
        boolean c = false;       //temporary. replacement of above line.

        if (c) {
            Toast.makeText(this, "PLEASE Fill out the Form", Toast.LENGTH_LONG).show();
        } else {
            Intent i = new Intent(this, visaToDocActivity.class);
            i.putExtra("org_name", organisation_Name.getText().toString());
            i.putExtra("person_name", person_Name.getText().toString());
            i.putExtra("designation", designation.getText().toString());
            i.putExtra("visit_purpose", visit_Purpose.getText().toString());
            i.putExtra("project_name", project_Name.getText().toString());
            i.putExtra("funding_org", funding_Organization.getText().toString());
            i.putExtra("stay_address", stay_Address.getText().toString());
            i.putExtra("visit_city", visit_City.getText().toString());
            i.putExtra("no_of_person", noOf_Person.getText().toString());
            i.putExtra("stay_duration", stay_Duration.getText().toString());
            i.putExtra("flight_arrival_date", flight_arrival_Date.getText().toString());
            i.putExtra("flight_arrival_no", flight_Arrival_No.getText().toString());
            i.putExtra("flight_departure_date", flight_Departure_Date.getText().toString());
            i.putExtra("flight_departure_no", flight_Departure_No.getText().toString());
            i.putExtra("agenda_details", agenda_Details.getText().toString());
            startActivity(i);
        }
    }

    private boolean check() {
        if (TextUtils.isEmpty(organisation_Name.getText().toString())) {
            organisation_Name.setError("Fill out this part.");
            organisation_Name.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(person_Name.getText().toString())) {
            person_Name.setError("Fill out this part.");
            person_Name.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(designation.getText().toString())) {
            designation.setError("Fill out this part.");
            designation.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(visit_Purpose.getText().toString())) {
            visit_Purpose.setError("Fill out this part.");
            visit_Purpose.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(project_Name.getText().toString())) {
            project_Name.setError("Fill out this part.");
            project_Name.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(funding_Organization.getText().toString())) {
            funding_Organization.setError("Fill out this part.");
            funding_Organization.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(stay_Address.getText().toString())) {
            stay_Address.setError("Fill out this part.");
            stay_Address.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(visit_City.getText().toString())) {
            visit_City.setError("Fill out this part.");
            visit_City.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(noOf_Person.getText().toString())) {
            noOf_Person.setError("Fill out this part.");
            noOf_Person.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(stay_Duration.getText().toString())) {
            stay_Duration.setError("Fill out this part.");
            stay_Duration.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(flight_arrival_Date.getText().toString())) {
            flight_arrival_Date.setError("Fill out this part.");
            flight_arrival_Date.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(flight_Arrival_No.getText().toString())) {
            flight_Arrival_No.setError("Fill out this part.");
            flight_Arrival_No.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(flight_Departure_Date.getText().toString())) {
            flight_Departure_Date.setError("Fill out this part.");
            flight_Departure_Date.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(flight_Departure_No.getText().toString())) {
            flight_Departure_No.setError("Fill out this part.");
            flight_Departure_No.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(agenda_Details.getText().toString())) {
            agenda_Details.setError("Fill out this part.");
            agenda_Details.requestFocus();
            return true;
        }
        return false;
    }

    public void init() {
        organisation_Name = findViewById(R.id.organisation_name);
        person_Name = findViewById(R.id.person_name);
        designation = findViewById(R.id.visa_designation);
        visit_Purpose = findViewById(R.id.visit_purpose);
        project_Name = findViewById(R.id.project_name);
        funding_Organization = findViewById(R.id.funding_organisation);
        stay_Address = findViewById(R.id.stay_address);
        visit_City = findViewById(R.id.visit_city);
        noOf_Person = findViewById(R.id.no_of_person);
        stay_Duration = findViewById(R.id.stay_duration);
        sp1 = findViewById(R.id.visa_spinner);
        flight_arrival_Date = findViewById(R.id.flight_arrival_dateText);
        flight_Arrival_No = findViewById(R.id.flight_arrival_no);
        flight_Departure_Date = findViewById(R.id.flight_departure_dateText);
        flight_Departure_No = findViewById(R.id.flight_departure_no);
        agenda_Details = findViewById(R.id.agenda_details);
    }
}
