package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;

import com.google.zxing.Result;

import me.dm7.barcodescanner.zxing.ZXingScannerView;

public class ScanCodeQR extends AppCompatActivity implements ZXingScannerView.ResultHandler {

    private static final String TAG = "special";
    ZXingScannerView scannerView;
    String type;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        scannerView = new ZXingScannerView(this);
        setContentView(scannerView);
        this.type = getIntent().getStringExtra("QRtype");
    }

    @Override
    public void handleResult(Result result) {

        Log.i("special", "handleResult: " + type);
        if (type.equals("Line By Line")) {
            Log.i("special", "handleResult: in first if");
            SplitByLine(result.toString());
        }
        if (type.equals("JSON")) {
            SplitByJSON(result.toString());
        }
        scanOptionsActivity.scanqr.setText(R.string.qrDone);
        onBackPressed();
    }

    private void SplitByLine(String res) {
        Log.i("special", "SplitByLine: start");
        String fullvalue = res;
        String[] afterSplit = fullvalue.split("\n");
        for (int i = 0; i < afterSplit.length; i++) {
            Log.i("special", "SplitByLine: " + afterSplit[i]);
        }

        signUpActivity.businessName.setText(afterSplit[1]);
        signUpActivity.businessAddress.setText(afterSplit[2]);
        signUpActivity.email.setText(afterSplit[3]);
        signUpActivity.email2.setText(afterSplit[3]);
        signUpActivity.URL.setText(afterSplit[4]);
        signUpActivity.mobileNo.setText(afterSplit[5]);
        signUpActivity.mobileNo2.setText(afterSplit[5]);
        signUpActivity.faxNo.setText(afterSplit[6]);
        signUpActivity.teleHome.setText(afterSplit[7]);

        signUpActivity.businessName.setEnabled(false);
        signUpActivity.businessAddress.setEnabled(false);
        signUpActivity.email.setEnabled(false);
        signUpActivity.URL.setEnabled(false);
        signUpActivity.mobileNo.setEnabled(false);
        signUpActivity.faxNo.setEnabled(false);
        signUpActivity.teleHome.setEnabled(false);

        signUpActivity.businessName.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.businessAddress.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.email.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.email2.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.URL.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.mobileNo.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.mobileNo2.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.faxNo.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.teleHome.setTextColor(getResources().getColor(R.color.member_form_text));
    }

    private void SplitByJSON(String res) {
//        String fullValue = signUpActivity.details.getText().toString();
        String fullValue = res;
        String[] firstpart = fullValue.split(",");

        for (int i = 0; i < firstpart.length; i++) {
            firstpart[i] = firstpart[i].replace("\"", "");
        }

        firstpart[0] = firstpart[0].replace("{", "");
        firstpart[firstpart.length - 1] = firstpart[firstpart.length - 1].replace("}", "");

//        parts[0] = parts[0].replace("\"","");
//        parts[1] = parts[1].replace("\"","");
//        parts[2] = parts[2].replace("\"","");
//        MainActivity.name.setText(firstpart[0]);
//        MainActivity.age.setText(firstpart[1]);
//        MainActivity.business.setText(firstpart[2]);
//        MainActivity.passport.setText(firstpart[firstpart.length - 1]);

//        String newParts = Arrays.toString(parts);
        for (int a = 0; a < firstpart.length; a++) {
            Log.i(TAG, "\nsplitting: " + firstpart[a]);
        }

        String[] secondpart = new String[firstpart.length];
        String[] demo = new String[2];

        Log.i(TAG, "splitting: length " + firstpart.length);

        for (int b = 0; b < firstpart.length; b++) {
            Log.i(TAG, "splitting: " + b);
            if (b == 4) {
                secondpart[b] = firstpart[b];
                Log.i(TAG, "\nnew splitting: secondpart " + secondpart[b]);
                Log.i(TAG, "splitting: " + firstpart.length);
                continue;
            }
            demo = firstpart[b].split(":");
            Log.i(TAG, "\nparts splitting: demo " + demo[0] + " 2nd index " + demo[1]);

            secondpart[b] = demo[1];
            Log.i(TAG, "\nnew splitting: secondpart " + secondpart[b]);
            Log.i(TAG, "splitting: " + firstpart.length);
        }

        signUpActivity.businessName.setText(secondpart[2]);
        signUpActivity.businessAddress.setText(secondpart[3] + secondpart[4]);
        signUpActivity.email.setText(secondpart[5]);
        signUpActivity.email2.setText(secondpart[5]);
        signUpActivity.URL.setText(secondpart[6]);
        signUpActivity.mobileNo.setText(secondpart[7]);
        signUpActivity.mobileNo2.setText(secondpart[7]);
        signUpActivity.faxNo.setText(secondpart[8]);
        signUpActivity.teleHome.setText(secondpart[9]);

        signUpActivity.businessName.setEnabled(false);
        signUpActivity.businessAddress.setEnabled(false);
        signUpActivity.email.setEnabled(false);
        signUpActivity.URL.setEnabled(false);
        signUpActivity.mobileNo.setEnabled(false);
        signUpActivity.faxNo.setEnabled(false);
        signUpActivity.teleHome.setEnabled(false);

        signUpActivity.businessName.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.businessAddress.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.email.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.email2.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.URL.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.mobileNo.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.mobileNo2.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.faxNo.setTextColor(getResources().getColor(R.color.member_form_text));
        signUpActivity.teleHome.setTextColor(getResources().getColor(R.color.member_form_text));
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
