package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.graphics.Typeface;
import android.os.Bundle;

import com.google.zxing.Result;

import me.dm7.barcodescanner.zxing.ZXingScannerView;

public class ScanCodeCNIC extends AppCompatActivity implements ZXingScannerView.ResultHandler{

    ZXingScannerView scannerView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        scannerView = new ZXingScannerView(this);
        setContentView(scannerView);
    }

    @Override
    public void handleResult(Result result) {
        SplitCnic(result.toString());
        onBackPressed();
    }

    private void SplitCnic(String res) {

        String cnic = res.substring(12,24);
        signUpActivity.CNIC.setText(cnic);
        signUpActivity.CNIC.setEnabled(false);
        signUpActivity.CNIC.setTextColor(getResources().getColor(R.color.member_form_text));
        scanOptionsActivity.scancnic.setText(R.string.qrDone);
    }

    @Override
    protected void onPause() {
        super.onPause();
        scannerView.stopCamera();
    }

    @Override
    protected void onResume() {
        super.onResume();
        scannerView.setResultHandler(this);
        scannerView.startCamera();
    }
}
