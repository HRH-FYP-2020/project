package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;

public class scanOptionsActivity extends AppCompatActivity {

    public static Button scancnic, scanqr;
    Spinner qrCheck;
    private int check = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scan_options);
        init();

        ArrayAdapter view1 = ArrayAdapter.createFromResource(this, R.array.qrCheck, R.layout.spinner_text);
        view1.setDropDownViewResource(R.layout.spinner_text);
        qrCheck.setAdapter(view1);

//        ArrayAdapter<String> view1 = new ArrayAdapter<String>(scanOptionsActivity.this,
//                android.R.layout.simple_expandable_list_item_1, getResources().getStringArray(R.array.qrCheck));
//        qrCheck.setAdapter(view1);
    }

    public void ScanCnic(View v) {
        check++;
        startActivity(new Intent(this, ScanCodeCNIC.class));

        if (check == 2) {
            onBackPressed();
        }
    }

    public void ScanData(View v) {
        check++;
        String type = qrCheck.getSelectedItem().toString();

        Intent i = new Intent(this, ScanCodeQR.class);
        i.putExtra("QRtype", type);
        startActivity(i);

        if (check == 2) {
            onBackPressed();
        }
    }

    private void init() {
        scancnic = findViewById(R.id.qrcodecnic);
        scanqr = findViewById(R.id.qrscanner);
        qrCheck = findViewById(R.id.qrCheck);
    }
}
