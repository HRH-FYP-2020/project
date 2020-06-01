package com.example.project1;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import static com.example.project1.signUpActivity.email;

public class ProfileFragment extends Fragment {

    private static final String TAG = "debug";
    public static final String url = "http://192.168.0.106:5001/person";
    private String email = "kar";
    private TextView name,surname,email1,rank,business,business_Address,mobile_No,fax_No;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v =  inflater.inflate(R.layout.fragment_profile,container,false);
        name = v.findViewById(R.id.name);
        surname = v.findViewById(R.id.surname);
        email1 = v.findViewById(R.id.email_profile);
        rank = v.findViewById(R.id.rank);
        business = v.findViewById(R.id.business);
        business_Address = v.findViewById(R.id.businessAddress);
        mobile_No = v.findViewById(R.id.mobileNumber);
        fax_No = v.findViewById(R.id.faxNo);

//        this.email = getArguments().getString("email");

//        FetchData();
        return v;
    }

    private void FetchData() {       //here we fetch all the data against that email
        Log.i(TAG, "FetchData: ");
        RequestQueue requestQueue = Volley.newRequestQueue(requireContext());

       /* StringRequest req = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                Log.i(TAG, "onResponse: " + response);
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i(TAG, "onErrorResponse: " + error);
                Toast.makeText(profileActivity.this, "ERROR!! " + error, Toast.LENGTH_SHORT).show();
            }
        });*/

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, url, null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        Log.i(TAG, "onResponse: " + response);
                        try {
                            Log.i(TAG, "onResponse: in try method");
                            Log.i(TAG, "onResponse: "+ response.getString("name"));
                            Log.i(TAG, "onResponse: "+ response.getString("surname"));
                            Log.i(TAG, "onResponse: "+ response.getString("rank"));
                            Log.i(TAG, "onResponse: "+ response.getString("business"));
                            Log.i(TAG, "onResponse: "+ response.getString("business_address"));
                            Log.i(TAG, "onResponse: "+ response.getString("mobile_No"));
                            Log.i(TAG, "onResponse: "+ response.getString("fax_No"));

                            //name,surname, email, pic
                            name.setText(response.getString("name"));
                            surname.setText(response.getString("surname"));
                            email1.setText(email);
                            rank.setText(response.getString("rank"));
                            business.setText(response.getString("business"));
                            business_Address.setText(response.getString("business_address"));
                            mobile_No.setText(response.getString("mobile_No"));
                            fax_No.setText(response.getString("fax_No"));

//                            String rank1 = response.getString("rank");
//                            String business1 = response.getString("business");
//                            String bus_ad = response.getString("business_address");
//                            String mob = response.getString("mobile_No");
//                            String faxN = response.getString("fax_No");
//                            pic = stringToImage(response.getString("pics"));
//                            Log.i(TAG, "onResponse: " + rank1 + " " + business1 + " " + bus_ad + " " + mob + " " + faxN);
//                            rank = findViewById(R.id.rank);
//                            name_New.setText(response.getString("name"));
//                            surname_New.setText(response.getString("surname"));
//                            email_New.setText(email);
//                            rank_New.setText(rank1);
//                            business_New.setText(business1);
//                            business_Address_New.setText(bus_ad);
//                            mobile_No_New.setText(mob);
//                            fax_No_New.setText(faxN);
//                            rank.setText(response.getString("rank"));
//                            business.setText(response.getString("business"));
//                            business_Address.setText(response.getString("business_address"));
//                            mobile_No.setText(response.getString("mobile_No"));
//                            fax_No.setText(response.getString("fax_No"));
                            Log.i(TAG, "onResponse: try end");
                        } catch (JSONException e) {
                            Log.i(TAG, "onResponse: " + e);
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i(TAG, "onErrorResponse: " + error);
                Toast.makeText(getActivity(),"Text!" + error,Toast.LENGTH_SHORT).show();
//                Toast.makeText(ProfileFragment.this, "ERROR!! " + error, Toast.LENGTH_SHORT).show();
            }
        });
        requestQueue.add(jsonObjectRequest);
//        requestQueue.add(req);
        Log.i(TAG, "FetchData: last line");
    }
}
