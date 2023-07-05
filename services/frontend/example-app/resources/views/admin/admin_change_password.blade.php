@extends('admin.admin_dashboard')
@section('admin')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js">

    </script>
    <div class="d-none d-md-block col-md-4 col-xl-4 left-wrapper">
        <div class="card rounded">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <div>
                        <img class="wd-100 rounded-circle"
                             src="{{ !empty($profileData->photo)
                                        ? url('upload/admin_images/'.$profileData->photo)
                                        : url('upload/no_image.jpg') }}"
                             alt="profile">
                        <span class="h4 ms-3">{{ $profileData->name }}</span>
                    </div>
                </div>
                <div class="mt-3">
                    <label class="tx-11 fw-bolder mb-0 text-uppercase">Name:</label>
                    <p class="text-muted">{{ $profileData->name }}</p>
                </div>
                <div class="mt-3">
                    <label class="tx-11 fw-bolder mb-0 text-uppercase">Email:</label>
                    <p class="text-muted">{{ $profileData->email }}</p>
                </div>
                <div class="mt-3">
                    <label class="tx-11 fw-bolder mb-0 text-uppercase">Phone:</label>
                    <p class="text-muted">{{ $profileData->phone }}</p>
                </div>
                <div class="mt-3">
                    <label class="tx-11 fw-bolder mb-0 text-uppercase">Address:</label>
                    <p class="text-muted">{{ $profileData->address }}</p>
                </div>
                <div class="mt-3 d-flex social-links">
                    <a href="javascript:;" class="btn btn-icon border btn-xs me-2">
                        <i data-feather="github"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-icon border btn-xs me-2">
                        <i data-feather="twitter"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-icon border btn-xs me-2">
                        <i data-feather="instagram"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-8 col-xl-8 middle-wrapper">
            <div class="row">

                <div class="card">
                    <div class="card-body">

                        <h6 class="card-title">Update Admin Form</h6>

                        <form method="POST" action="{{ route('admin.profile.store') }}"
                              class="forms-sample" enctype="multipart/form-data">
                            @csrf
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input name="username" type="text" class="form-control" id="exampleInputUsername1"
                                       autocomplete="off"
                                       placeholder="Username" value="{{ $profileData->username }}">
                            </div>

                            <button type="submit" class="btn btn-primary me-2">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
