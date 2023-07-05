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

                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input name="name" type="text" class="form-control" id="exampleInputEmail1"
                                       placeholder="Name" value="{{ $profileData->name }}">
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input name="email" type="email" class="form-control" id="exampleInputEmail1"
                                       placeholder="Email" value="{{ $profileData->email }}">
                            </div>

                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input name="phone" type="text" class="form-control" id="exampleInputEmail1"
                                       placeholder="Phone" value="{{ $profileData->phone }}">
                            </div>

                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <input name="address" type="text" class="form-control" id="exampleInputEmail1"
                                       placeholder="Address" value="{{ $profileData->address }}">
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="formFile">File upload</label>
                                <input class="form-control" type="file" id="image">
                            </div>
                            <div class="mb-3">
                                <img id="showImage" class="wd-100 rounded-circle"
                                     src="{{ !empty($profileData->photo)
                                        ? url('upload/admin_images/'.$profileData->photo)
                                        : url('upload/no_image.jpg') }}"
                                     alt="profile">
                            </div>
                            <button type="submit" class="btn btn-primary me-2">Submit</button>
                            <button class="btn btn-secondary">Cancel</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(() => {
            $('#image').change(() => {
                $('#image').change((e) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        $('#showImage').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(e.target.files['0']);
                });
            });
        });
    </script>
@endsection
