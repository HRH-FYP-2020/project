package com.example.project1;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.Base64;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import static android.app.Activity.RESULT_OK;
import static com.example.project1.signUpActivity.BEDate;

public class EventFragment extends Fragment {

    private Button submit, poster, startDate, endDate;
    private EditText event_name, event_description, event_startDate, event_endDate, event_venue;
    private Bitmap pic_poster = null;
    private Spinner category;
    private final String url = "http://192.168.0.106:5001/person";
    private final int IMG_REQ = 1;


    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_event, container, false);

        init(v);

        ArrayAdapter view1 = ArrayAdapter.createFromResource(getContext(), R.array.main_line_of_business, R.layout.spinner_text);
        view1.setDropDownViewResource(R.layout.spinner_text);
        category.setAdapter(view1);

        startDate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setStartDate();
            }
        });

        endDate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setEndDate();
            }
        });

        poster.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Upload();
            }
        });

        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                SendData();
            }
        });

        return v;
    }

    private void setStartDate() {
        final Calendar c = Calendar.getInstance();
        int mYear = c.get(Calendar.YEAR);
        int mMonth = c.get(Calendar.MONTH);
        int mDay = c.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(requireContext(),
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        event_startDate.setText(dayOfMonth + "-" + (month + 1) + "-" + year);
                    }
                }, mYear, mMonth, mDay);
        datePickerDialog.show();
    }

    private void setEndDate() {
        final Calendar c = Calendar.getInstance();
        int mYear = c.get(Calendar.YEAR);
        int mMonth = c.get(Calendar.MONTH);
        int mDay = c.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(requireContext(),
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        event_endDate.setText(dayOfMonth + "-" + (month + 1) + "-" + year);
                    }
                }, mYear, mMonth, mDay);
        datePickerDialog.show();
    }

    private void Upload() {
        Intent i = new Intent();
        i.setType("image/*");
        i.setAction(Intent.ACTION_GET_CONTENT);
        startActivityForResult(i, IMG_REQ);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == IMG_REQ && resultCode == RESULT_OK && data != null) {
            Uri path = data.getData();
            try {
                pic_poster = MediaStore.Images.Media.getBitmap(getActivity().getContentResolver(), path);
                poster.setText(R.string.doc_uploaded);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private void SendData() {
//        boolean c = check();
        boolean c = false;

        if (c) {
            Toast.makeText(getActivity(), "Kindly fill the requirements", Toast.LENGTH_SHORT).show();
        } else {
            RequestQueue requestQueue = Volley.newRequestQueue(requireContext());
            StringRequest stringRequest = new StringRequest(Request.Method.POST, url,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            Toast.makeText(getActivity(), "success", Toast.LENGTH_SHORT).show();
                            startActivity(new Intent(getActivity(), reqSubmittedActivity.class));
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Toast.makeText(getActivity(), "error", Toast.LENGTH_SHORT).show();
                }
            }) {
                @Override
                protected Map<String, String> getParams() throws AuthFailureError {
                    Map<String, String> params = new HashMap<>();
                    params.put("event_name", event_name.getText().toString());
                    params.put("event_description", event_description.getText().toString());
                    params.put("event_startDate", event_startDate.getText().toString());
                    params.put("event_endDate", event_endDate.getText().toString());
                    params.put("event_venue", event_venue.getText().toString());

                    if (pic_poster != null) {
                        params.put("pic_cnic", imageToString(pic_poster));
                    }

                    return params;
                }
            };
            requestQueue.add(stringRequest);
        }
    }

    private String imageToString(Bitmap bitmap) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
        byte[] imgBytes = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(imgBytes, Base64.DEFAULT);
    }

    private boolean check() {
        if (TextUtils.isEmpty(event_name.getText().toString())) {
            event_name.setError("Fill out this part.");
            event_name.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(event_description.getText().toString())) {
            event_description.setError("Fill out this part.");
            event_description.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(event_startDate.getText().toString())) {
            event_startDate.setError("Fill out this part.");
            event_startDate.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(event_endDate.getText().toString())) {
            event_endDate.setError("Fill out this part.");
            event_endDate.requestFocus();
            return true;
        }
        if (TextUtils.isEmpty(event_venue.getText().toString())) {
            event_venue.setError("Fill out this part.");
            event_venue.requestFocus();
            return true;
        }
        return false;
    }

    private void init(View v) {
        event_name = v.findViewById(R.id.event_name);
        event_description = v.findViewById(R.id.event_description);
        event_startDate = v.findViewById(R.id.eventStart_date);
        event_endDate = v.findViewById(R.id.eventEnd_date);
        event_venue = v.findViewById(R.id.event_venue);
        startDate = v.findViewById(R.id.date_startbtn);
        endDate = v.findViewById(R.id.date_endbtn);
        category = v.findViewById(R.id.event_category);
        poster = v.findViewById(R.id.poster_btn);
        submit = v.findViewById(R.id.event_submit);
    }
}
