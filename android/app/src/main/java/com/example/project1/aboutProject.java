package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.github.barteksc.pdfviewer.PDFView;

public class aboutProject extends AppCompatActivity {

    PDFView aboutProject;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about_project);

        aboutProject = findViewById(R.id.pdfaboutProject);

        aboutProject.fromAsset("srs.pdf").load();
    }
}
