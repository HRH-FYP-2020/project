package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.github.barteksc.pdfviewer.PDFView;

public class aboutUs extends AppCompatActivity {

    PDFView aboutUs;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about_us);

        aboutUs = findViewById(R.id.pdfaboutUs);

        aboutUs.fromAsset("about_us.pdf").load();
    }
}
